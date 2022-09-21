import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Cliente, ClienteI } from '../models/Cliente';

export class ClienteController {


    public async test(req: Request, res:Response){
        try {
            res.send('hola, metodo test para Cliente')
        } catch (error) {

        }
    }

    public async getAllCliente(req: Request, res:Response){
        try {
            const cliente: ClienteI[] = await Cliente.findAll(
                {
                    where: {activo: true}
                }
            ) // select * from clientes;
            res.status(200).json({cliente})
        } catch (error) {

        }
    }
}