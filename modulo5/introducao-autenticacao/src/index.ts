import app from "./app";
import { AddressInfo } from "net";
import { criaUser } from "./endpoints/criarUser";
import { geraId } from "./services/geraId";

console.log("Generated Id: ", geraId());

app.post("/criarUser", criaUser)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});