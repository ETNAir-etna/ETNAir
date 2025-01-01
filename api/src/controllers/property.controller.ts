import { NextFunction, Request, Response } from "express";
import { sendJsonPromise } from "../helpers/sendJsonPromise.helper";
import { PropertyService } from "../services/property.service";
import { PropertyFilter, Property, PropertyDTO, PropertyFilterDTO } from "@etnair-etna/shared/dist";

export class PropertyController {
  static async getAllProperties(req: Request,res: Response,next: NextFunction): Promise<void> {
    const page: number = isNaN(Number(req.query.page)) ? 1 : Number(req.query.page);
    const body = req.body
    const numberByPage: number = body.numberByPage ?? 15
    const data: PropertyFilter = PropertyFilterDTO( body, numberByPage, page, body.publishedAt, body.pricePerNight );
    sendJsonPromise(PropertyService.getProperties(data))(req, res, next);
  }

  // TODO  finish it
  static async getAllUserProperties(req: Request,res: Response,next: NextFunction): Promise<void> {}

  static async getPropertyById(req: Request,res: Response,next: NextFunction): Promise<void> {
    const { id } = req.params;
    sendJsonPromise(PropertyService.getPropertyById(id))(req, res, next);
  }

  static async createProperty(req: Request,res: Response,next: NextFunction): Promise<void> {
    const data: Property = PropertyDTO(req.body);
    sendJsonPromise(PropertyService.createProperty(data))(req, res, next);
  }

  static async updateProperty( req: Request, res: Response, next: NextFunction ): Promise<void> {
    const data: Property = PropertyDTO(req.body);
    sendJsonPromise(PropertyService.updateProperty(data))(req, res, next);
  }

  static async deleteProperty( req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id, ownerId } = req.params;
    sendJsonPromise(PropertyService.deleteProperty(id, ownerId))( req, res, next);
  }

  static async deleteAllProperties( req: Request, res: Response, next: NextFunction ): Promise<void> {
    const { ownerId } = req.params;
    sendJsonPromise(PropertyService.deleteAllProperties(ownerId))( req, res, next);
  }
}
