import express , {Request, Response}from "express";
import cors from "cors";
import {users} from "./data/data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

/// Precisa de ter tudo que esta em cima pra isso funcionar 

// type user = {
//     id: number,
//     name: string,
//     email: string,
//     type: UserType,
//     age: number
// }

// enum UserType {
//     ADMIN = "ADMIN",
//     NORMAL = "NORMAL"
// }

// app.get("/users", (req, res) => {    
    
//     try{

//         res.send(users)

//     }catch(err){


//     }
// })


// app.get("/users", (req: Request, res: Response) => {    
    
//     try{

//         const type : string = req.query.type as string 
        
//         const users : users | undefined = users.find((users) => users.type === type)
        
//     }catch(err){


//     }
// })