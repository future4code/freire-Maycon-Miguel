import app from "./app";
import getAllCadastro from "./endpoints/getAllCadastro"

app.get("/cadastro", getAllCadastro);



