import {Router} from 'express';
import { restControllers } from '../controllers/restController';

class RestRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', restControllers.getRestaurantes);
        this.router.get('/:id', restControllers.getRestaurante);
        this.router.post('/', restControllers.create);
        this.router.put('/:id', restControllers.update);
        this.router.delete('/:id',restControllers.delete);
    }
}

const restRoutes= new RestRoutes();
export default restRoutes.router;