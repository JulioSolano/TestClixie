import {Router} from 'express';
import { platControllers } from '../controllers/platController';
class PlatRoutes{
    public router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:idRest', platControllers.getPlatillos);
        // this.router.get('/:idRest', platControllers.getPlatillo);
        this.router.post('/', platControllers.create);
        this.router.put('/:id', platControllers.update);
        this.router.delete('/:id',platControllers.delete);
    }
}

const platRoutes= new PlatRoutes();
export default platRoutes.router;