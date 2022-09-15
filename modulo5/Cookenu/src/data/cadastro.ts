import connection from "./connection";

const selectAllCadastro = async () => {

    const result = await connection
            .select("*")
            .from("cadastro")

    return result;
}

export default selectAllCadastro