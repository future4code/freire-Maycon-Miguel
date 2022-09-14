import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS autenticacao(
         id VARCHAR(255) PRIMARY KEY,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,
      );
   `)
   .then(() => { console.log("Tabela criada") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(() => console.log("Banco pronto!"))
   .finally(closeConnection)
