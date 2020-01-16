import {Request, Response} from 'express';
import pool from '../database';

class RestControllers {

    public async getRestaurantes( req: Request, res: Response) {
        await pool.query('SELECT * FROM restaurantes', ( err, result ) => {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }
    public async getRestaurante( req: Request, res: Response) {
        const {id} = req.params;

        await pool.query('SELECT * FROM restaurantes WHERE id = ?', id, (err, result) => {
            if(err) throw err;
            if (result.length > 0) {
                res.json(result);
            } else res.status(404).json({message: 'Restaurant no enontrado: ' + id});
        });
    }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO restaurantes SET ?', req.body, (err, result) => {
            if(err) throw err;
            res.json({message:'restaurante agregado'});
        })
    }
    public async update ( req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('UPDATE restaurantes SET ? WHERE id = ?', [req.body, id] , (err, result) => {
            if(err) throw err;
            res.json({message:'restaurante actualizado: ', id});
        });
    }
    public async delete (req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM restaurantes WHERE id=?', id, (err, result) => {
            if(err) throw err;
            res.json({message:'restaurante eliminado: ', id});
        });
    }
}
export const restControllers = new RestControllers();