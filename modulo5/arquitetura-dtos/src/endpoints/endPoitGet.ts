import { Request, Response } from "express"
import selectAllDados from "../data/conectandoBanco"

export const addDocente = async (req: Request, res: Response) => {
    try {
        await selectAllDados()
        res.status(200).send("Docente adicionado com sucesso com sucesso")

    } catch (error: any) {
        res.status(500).send(error.message)        
    }
}