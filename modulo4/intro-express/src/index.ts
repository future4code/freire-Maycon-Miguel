import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import { type } from "os";

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


// Exercicio 1

app.get("/", (req, res) => {
    res.send("O servidor estar funcionando!")
})


// Exercicio 2

type user = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website:string
}

const maycon: user = {

    id: "2022",
    name: "Maycon",
    phone: "28 999287132",
    email: "mayconcoutinhoart@gmail.com",
    website: "https://github.com/MayconCoutinho",
}

app.get('/users', (req: Request, res: Response) => {

    if (req.body.chave === "2022"){
    res.send(maycon)
} 
else {
    res.send("A chave não vale valor")
    }

    })

// Exercicio 3

const frutas: string[] = ["Manga","Laranja","Carambola","Cereja","Caju"]

app.get("/frutas",(req: Request, res: Response) => {

    if(req.body.chave === "frutas"){
        res.send(frutas)
    }
    else {
        res.send("A chave não vale valor")
        }

})