"use client"

import Header_Salas from "../components/header-salas"
import Criar_Salas from "../components/criar-salas"
import "./salas.css"
import { useState } from "react"

export default function Jogo(){

    const [idSala, alteraIdSala] = useState("");
    const [autenticacao, alteraAutenticacao ] = useState("");

    return(

        <div id="salas">
            
                <Header_Salas link="img/logo.png" nome="Jorge"/>

                <Criar_Salas/>
        </div>
    )
}