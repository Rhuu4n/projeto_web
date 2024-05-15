"use client"
import { useState } from "react";
import "./termo.css"

export default function Linha(){

    const [letra, alteraLetra] = useState();

    let campo= 1

    const linha = [
        <input className="txt1" onChange={(event)=> inserir(event)}></input>,
        <input className="txt2" onChange={(event)=> inserir(event)}></input>,
        <input className="txt3" onChange={(event)=> inserir(event)}></input>,
        <input className="txt4" onChange={(event)=> inserir(event)}></input>,
        <input className="txt5" onChange={(event)=> inserir(event)}></input>
    ]

    function inserir(event){
        const value = event.target.value;
        // Remove todos os caracteres que não são números
        const newValue = value.replace(/[^a-zA-Z]/g, '');
        // Limita o valor a 4 caracteres
        const limitedValue = newValue.slice(0, 1);
        // Atualiza o valor do campo
        event.target.value = limitedValue;
        alteraLetra(limitedValue);
        document.querySelector(".txt" + campo).focus()
        campo++
    };

    return(
        <div id="linha">
            
        </div>
    );
}