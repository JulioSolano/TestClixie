import {Request, Response} from 'express';
import pool from '../database';

class PlatControllers {

    public async getPlatillos( req: Request, res: Response) {
        const {idRest} = req.params;
        await pool.query('SELECT * FROM platillos WHERE idRestaurante=?', idRest,( err, result ) => {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    }
    // public async getPlatillo( req: Request, res: Response) {
    //     const {id} = req.params;

    //     await pool.query('SELECT * FROM platillos WHERE id = ?', id, (err, result) => {
    //         if(err) throw err;
    //         if (result.length > 0) {
    //             res.json(result);
    //         } else res.status(404).json({message: 'platillo no enontrado: ' + id});
    //     });
    // }
    public async create(req: Request, res: Response) {
        await pool.query('INSERT INTO platillos SET ?', req.body, (err, result) => {
            if(err) throw err;
            res.json({message:'platillo agregado'});
        })
    }
    public async update ( req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('UPDATE platillos SET ? WHERE id = ?', [req.body, id] , (err, result) => {
            if(err) throw err;
            res.json({message:'platillo actualizado: ', id});
        });
    }
    public async delete (req: Request, res: Response) {
        const {id} = req.params;
        await pool.query('DELETE FROM platillos WHERE id=?', id, (err, result) => {
            if(err) throw err;
            res.json({message:'platillo eliminado: ', id});
        });
    }
}
export const platControllers = new PlatControllers();