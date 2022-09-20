import { AddressInfo } from "net";
import app from "./app";

import connection from './data/connection';


app.get('/cadastro', async (req,res) =>{
    try {
        const result = await connection.raw(`
            SELECT * FROM cadastro;        
        `)       
        res.status(200).send(result[0])        
    } catch (error: any) {
        res.status(500).send( error.sqlMessage || error.message)
    }})
  
  app.get ('/alunosbuilder',async (req,res) => {
    try {
        const result = await connection("cadastro")
        res.status(200).send(result)
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
  })
  


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});