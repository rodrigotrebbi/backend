 
 export async function GET(){
    
    const usuarios = [
        {nome: "Rodrigovsky", idade:21 },
        { nome: "Stánísláw", idade:24 },
        { nome: "Igor Chachenkov", idade:36 },
    ]

    return new Response(
        JSON.stringify (usuarios),
        {
            status: 200,
            headers: { "Content-Type":"application/json" }
        }
    )
 }
