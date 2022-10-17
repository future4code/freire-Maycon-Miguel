import { BaseDatabase } from "../BaseDatabase"

class Migrations extends BaseDatabase {
    execute = async () => {
        try {
            console.log("Creating tables...")
            await this.createTables()
            console.log("Tables created successfully.")
            console.log("Migrations completed.")

        } catch (error) {
            console.log("FAILED! Error in migrations...")
            if (error instanceof Error) {
                console.log(error.message)
            }
        } finally {
            console.log("Ending connection...")
            BaseDatabase.connection.destroy()
            console.log("Connection closed graciously.")
        }
    }

    createTables = async () => {
        await BaseDatabase.connection.raw(`
        
        CREATE TABLE IF NOT EXISTS jogos_olimpicos (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(45) NOT NULL,
            finished ENUM("true", "false") NULL,
            PRIMARY KEY (id))
        );

        CREATE TABLE IF NOT EXISTS competidores (
            id INT NOT NULL AUTO_INCREMENT,
            id_jogos_olimpicos INT NOT NULL,
            competicao VARCHAR(45) NOT NULL,
            atleta VARCHAR(45) NOT NULL,
            value VARCHAR(45) NOT NULL,
            unidade VARCHAR(45) NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (id_jogos_olimpicos) REFERENCES jogos_olimpicos (id)
        );

        CREATE TABLE IF NOT EXISTS resultados (
            id INT NOT NULL AUTO_INCREMENT,
            id_competidor INT NOT NULL,
            result1 VARCHAR(45) NULL,
            result2 VARCHAR(45) NULL,
            result3 VARCHAR(45) NULL,
            result_quantity INT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (id_competidor) REFERENCES competidores (id)
        );
        `)
    }
}
const migrations = new Migrations()
migrations.execute()