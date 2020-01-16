"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const platController_1 = require("../controllers/platController");
class PlatRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:idRest', platController_1.platControllers.getPlatillos);
        // this.router.get('/:idRest', platControllers.getPlatillo);
        this.router.post('/', platController_1.platControllers.create);
        this.router.put('/:id', platController_1.platControllers.update);
        this.router.delete('/:id', platController_1.platControllers.delete);
    }
}
const platRoutes = new PlatRoutes();
exports.default = platRoutes.router;
