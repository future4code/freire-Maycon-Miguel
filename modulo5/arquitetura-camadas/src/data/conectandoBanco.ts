import connection from "./connection";

const selectAllDados = async () => {

    const result = await connection
            .select("*")
            .from("cadastro")

    return result;
}

export default selectAllDados