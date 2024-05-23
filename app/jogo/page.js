"use client"

import Header_Salas from "./header-salas"
import Criar_Salas from "./criar-salas"
import "./salas.css"
import { useState } from "react"
import Lobby from "../lobby/lobby"

export default function Jogo(){

    const [idSala, alteraIdSala] = useState("");
    const [autenticacao, alteraAutenticacao ] = useState("");
    const [salaOrLobby, alteraSalaOrLobby] = useState("sala");

    return(

        <div id="salas">
                {
                    salaOrLobby == "sala" ? 
                    <>
                        <Header_Salas autenticacao={autenticacao} alteraAutenticacao={alteraAutenticacao} nome="Jorge"/> 
                        <Criar_Salas idSala={idSala} alteraIdSala={alteraIdSala} alteraSalaOrLobby={alteraSalaOrLobby} link="img/logo.png"/>
                    </> :

                    <Lobby idSala={idSala}/>

                    
                }
                

        </div>
    )
}