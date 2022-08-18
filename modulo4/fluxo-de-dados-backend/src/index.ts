import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { produtos } from "./data";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

/// Precisa de ter tudo que esta em cima pra isso funcionar 

app.get("/teste", (req, res) => {          
    res.send("Esta funcionando! 🚀 42")
})


app.get("/produto", (req, res) => {          
    res.send(produtos)
})

app.post("/produto/criar", (req,res) =>{

    const NovoProduto = {
        id: Date.now().toString(),
        name: req.body.name,
        price: req.body.price
    }

    produtos.push(NovoProduto)

    res.status(200).send(NovoProduto)

})



