import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import restRoutes from './routes/restRoutes';
import platRoutes from './routes/platRoutes';
import orderRoutes from './routes/orderRoutes';

class Server{
    public app:Application;
    constructor(){
        this.app= express();
        this.config();
        this.router();
    }

    config(): void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());

    }

    router(): void {
        this.app.use('/api/restaurantes', restRoutes);
        this.app.use('/api/platillos', platRoutes);
        this.app.use('/api/ordenes', orderRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server= new Server ();
server.start();