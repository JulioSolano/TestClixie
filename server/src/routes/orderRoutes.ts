import {Router} from 'express';
import { orderControllers } from '../controllers/orderController';

class OrderRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', orderControllers.getOrdenes);
        this.router.get('/:id', orderControllers.getOrden);
        this.router.post('/', orderControllers.create);
        this.router.put('/:id', orderControllers.update);
        this.router.delete('/:id',orderControllers.delete);
    }
}

const orderRoutes= new OrderRoutes();
export default orderRoutes.router;