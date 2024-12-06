import { Request, Response } from 'express';

export default async function sendJsonPromise<T>(req: Request, res: Response, promise: Promise<T>, notFoundMessage: string ) {
    try {
        const result = await promise;
        if (!result) {
            return res.status(404).json({ message: notFoundMessage });
        } 
            // console.log(result)
            return res.status(200).json(result);
        
    } catch (error) {
        console.error("Erreur attrapée :", error);
        return res.status(500).json({ error: error instanceof Error ? error.message : error });
    }
}

