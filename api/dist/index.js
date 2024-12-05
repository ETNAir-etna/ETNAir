"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
/* ROUTES */
const home_routes_1 = __importDefault(require("./routes/home.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const accomodations_routes_1 = __importDefault(require("./routes/accomodations.routes"));
dotenv.config();
const app = (0, express_1.default)();
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express_1.default.json());
app.use('/', home_routes_1.default);
app.use('/user', user_routes_1.default);
app.use('/accommodation', accomodations_routes_1.default);
app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>');
});
app.use("*", (req, res) => {
    res.status(500).send('Bad request');
});
const port = process.env.API_PORT || 3001;
console.log(process.env.API_PORT);
app.listen(port, () => {
    console.log(`App listening on port  http://localhost:${port}`);
});
