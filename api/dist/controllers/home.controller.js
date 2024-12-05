"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
class HomeController {
    static getHome(req, res) {
        res.send("Welcome to ETNAir | Home page");
    }
}
exports.HomeController = HomeController;
