'use client'
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";


function Produto () {
    
    const id = useParams().id

    const [produtos, alteraProdutos] = useState([])

    async function buscaPorID( id ) {
        const response = await axios.get("http://localhost:3000/api/produtos/"+id)
        alteraProdutos( response.data )
    }

    useEffect( ()=> {
        if(id){ 
            buscaPorID(id)
         }
    },[id])

    return ( 
        <div>
            <h1> Detalhes do produto { useParams().id } </h1>

            <hr/>

           {
            produtos.length > 0 &&
                <div>
                    <p> <strong>{produtos[0].nome}</strong> </p>

                    <p> R$<strong>{produtos[0].preco}</strong> </p>

                    <p> Quantidade em estoque <strong> {produtos[0].quantidade}</strong> </p>
                </div>


           }

           <button onClick={ ()=> redirect ("/") }>  Voltar </button>
            
        </div>
     );
}

export default Produto ;