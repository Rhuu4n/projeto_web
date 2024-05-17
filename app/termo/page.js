"use client"
import "./termo.css"
import Linha from "./linhas";
import Link from "next/link";

export default function Termo(){

    return(
        <div id="termo">
            <h1 className="lblTermo">Termo</h1>

            <Linha readOnly="enable"/>
            <Linha readOnly="disable"/>
            <Linha readOnly="disable"/>
            <Linha readOnly="disable"/>
            <Linha readOnly="disable"/>
            <Linha readOnly="disable"/>

        </div>
    );
}