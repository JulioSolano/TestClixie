import {Request, Response} from 'express';
import pool from '../database';

class OrderControllers {

    public async getOrdenes( req: Request, res: Response) {
        await pool.query('SELECT * FROM ordenes', ( err, result ) => {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }
    public async getOrden( req: Request, res: Response) {
        const {id} = req.params;

        await pool.query('SELECT * FROM ordenes WHERE id = ?', id, (err, result) => {
            if(err) throw err;
            if (result.length > 0) {
                res.json(result);
            } else res.status(404).json({message: 'orden no enontrado: ' + id});
        });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO ordenes SET ?', req.body, (err, result) => {
            if(err) throw err;
            res.json({message:'orden  agregado'});
        })
    }
    public async update ( req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('UPDATE ordenes SET ? WHERE id = ?', [req.body, id] , (err, result) => {
            if(err) throw err;
            res.json({message:'orden  actualizado: ', id});
        });
    }
    public async delete (req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM ordenes WHERE id=?', id, (err, result) => {
            if(err) throw err;
            res.json({message:'orden  eliminado: ', id});
        });
    }
}
export const orderControllers = new OrderControllers();