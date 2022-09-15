import { Request, Response } from "express";
import selectAllCadastro from "../data/cadastro";

const getAllCadastro = async (req: Request, res: Response) => {
    try {
        const cadastro = await selectAllCadastro()
        res.status(200).send({ cadastro: cadastro })
    }
    catch (error: any) {
        res.status(res.statusCode).send(error.message)
    }
}

export default getAllCadastro;