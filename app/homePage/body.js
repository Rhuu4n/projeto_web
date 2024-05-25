"use client"



import { useEffect, useState } from "react"
import axios from "axios";
import "./font.css"
import "./sliderStyle.css"




export default function Body () {


    
    const[numeroJogadores, setNumeroJogadores] = useState([]);


    function BuscaJogadoresOnline(){
        axios.get("/api/users")
        .then(function(response){
            setNumeroJogadores(response.data.length);
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

            <div className="imgsSlider">
                <img src="#"/>
                <img src="#"/>
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