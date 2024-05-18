"use client"
import "./termo.css"
import Linha from "./linhas";
import Link from "next/link";

export default function Termo(){

    let habilitado = [
        {
            enable:"",
            disable: "disable"
        }
        ]

    return(
        <div id="termo">
            <h1 className="lblTermo">Termo</h1>

            <Linha habilitado={habilitado[0].enable}/>
            <Linha habilitado={habilitado[0].disable}/>
            <Linha habilitado={habilitado[0].disable}/>
            <Linha habilitado={habilitado[0].disable}/>
            <Linha habilitado={habilitado[0].disable}/>
            <Linha habilitado={habilitado[0].disable}/>

        </div>
    );
}