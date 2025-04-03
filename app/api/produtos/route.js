import conexao from "../../lib/conexao"


export async function GET(){

    const query = `SELECT * FROM produtos;`
    const [results] = await conexao.execute(query)

    return new Response(
        JSON.stringify (results),
        {
            status: 200,
            headers: { "Content-Type":"application/json" }
        }
    )
    



}