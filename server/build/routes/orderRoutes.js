"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
class OrderRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', orderController_1.orderControllers.getOrdenes);
        this.router.get('/:id', orderController_1.orderControllers.getOrden);
        this.router.post('/', orderController_1.orderControllers.create);
        this.router.put('/:id', orderController_1.orderControllers.update);
        this.router.delete('/:id', orderController_1.orderControllers.delete);
    }
}
const orderRoutes = new OrderRoutes();
exports.default = orderRoutes.router;
