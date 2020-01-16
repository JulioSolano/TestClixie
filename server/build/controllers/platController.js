"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PlatControllers {
    getPlatillos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idRest } = req.params;
            yield database_1.default.query('SELECT * FROM platillos WHERE idRestaurante=?', idRest, (err, result) => {
                if (err)
                    throw err;
                console.log(result);
                res.json(result);
            });
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
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO platillos SET ?', req.body, (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'platillo agregado' });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE platillos SET ? WHERE id = ?', [req.body, id], (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'platillo actualizado: ', id });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM platillos WHERE id=?', id, (err, result) => {
                if (err)
                    throw err;
                res.json({ message: 'platillo eliminado: ', id });
            });
        });
    }
}
exports.platControllers = new PlatControllers();
