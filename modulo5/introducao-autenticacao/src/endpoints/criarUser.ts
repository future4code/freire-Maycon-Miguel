import { Request, Response } from "express";
import dataUser from "../data/dataUser";
import {TypeUser} from "../types/user";
import { geraId } from "../services/geraId";

export const criaUser = async (req: Request, res: Response) => {
    console.log('chegou em criarUser')
    try {
        const {email,password } = req.body

        const user: TypeUser = {
            id : geraId(),
            email,
            password
        }
        await dataUser(user)
        res.status(200).send("Conta criada com sucesso")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}