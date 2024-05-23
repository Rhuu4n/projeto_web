"use client"

import axios from "axios";
import { useEffect, useState } from "react"
import "./font.css"


export default function Body () {
    
    const[numeroJogadores, setNumeroJogadores] = useState([]);

    function BuscaJogadoresOnline(){
        axios.get("/api/users")
        .then(function(response){
            setDados(response.data.length);
        })
        .catch(function(error){
            console.error("erro")
        });


    }

    useEffect(()=>{
        BuscaJogadoresOnline();
    }, []);


    return(

        <div className="Main">

            <div className="imagemPrincipal">
                <img src="#" alt="#"/>
            </div>

            <div className="btnJogar">
                <button>Jogar agora</button>
            </div>

            <div className="numeroJogadores">
                <h2>Jogadores online agora: {numeroJogadores} </h2>
            </div>
            
        </div>

    )
}