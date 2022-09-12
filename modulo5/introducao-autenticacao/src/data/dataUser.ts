import { connection } from "./connection";

export default async function dataUser (user: any) {

  const {id,email, password} = user    

      await connection
        .insert({
          id,
          email,
          password,
        })
        .into('autenticacao');
};