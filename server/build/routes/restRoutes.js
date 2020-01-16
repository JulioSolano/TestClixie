"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const restController_1 = require("../controllers/restController");
class RestRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', restController_1.restControllers.getRestaurantes);
        this.router.get('/:id', restController_1.restControllers.getRestaurante);
        this.router.post('/', restController_1.restControllers.create);
        this.router.put('/:id', restController_1.restControllers.update);
        this.router.delete('/:id', restController_1.restControllers.delete);
    }
}
const restRoutes = new RestRoutes();
exports.default = restRoutes.router;
