"use client"

import axios from "axios";
import Linha from "./linhas";
import { useEffect, useState } from "react";
import "./termo.css"

export default function Termo(){
    
    const [palavra, alteraPalavra] = useState('')
    const [submit, alteraSubmit] = useState(0)
    const [linha, alteraLinha] = useState(0);
    const [palavra_certa, alteraPalavraCerta] = useState([]);
    const [i, alterai] = useState(null);
    let random = Math.floor(Math.random() * 6) + 0;

    let habilitado = [
        { linha1: "", linha2: "disable", linha3: "disable", linha4: "disable", linha5: "disable", linha6: "disable" },
        { linha1: "disable", linha2: "", linha3: "disable", linha4: "disable", linha5: "disable", linha6: "disable" },
        { linha1: "disable", linha2: "disable", linha3: "", linha4: "disable", linha5: "disable", linha6: "disable" },
        { linha1: "disable", linha2: "disable", linha3: "disable", linha4: "", linha5: "disable", linha6: "disable" },
        { linha1: "disable", linha2: "disable", linha3: "disable", linha4: "disable", linha5: "", linha6: "disable" },
        { linha1: "disable", linha2: "disable", linha3: "disable", linha4: "disable", linha5: "disable", linha6: "" },
        { linha1: "disable", linha2: "disable", linha3: "disable", linha4: "disable", linha5: "disable", linha6: "disable" }
        ]

    function Aleatorio(){
        if (i == null){
            alterai(random);
        }
    }
    
    function mudaLinha(){
        alteraLinha(linha + 1);
        alteraPalavra("");
        
        if (linha == 5){
            alteraLinha(0);
        }
    }

    function getPalavra(){
        const token = localStorage.getItem('token')
        axios.get("/api/termo", {
            headers:{
                'Content-Type':'application/json',
                'token': token
            }
        })
        .then(
            function(response){
                alteraPalavraCerta( response.data );
                Aleatorio();
                console.log(palavra_certa);
            }
        )
    }

    useEffect(()=> {
        getPalavra();
    },[]);

    return(
        palavra_certa.length > 0?
        <div id="termo">
            <div className="boxJogo">
                <h1 className="lblTermo">Termo</h1>
                <div className="boxTermo">
                    <Linha i = {i} palavra_certa = {palavra_certa} habilitado={habilitado[linha].linha1} alteraPalavra={alteraPalavra} alteraSubmit={alteraSubmit} mudaLinha = {mudaLinha} palavra = {palavra} submit = {submit} linha = {linha} alteraLinha={alteraLinha}/>
                    <Linha i = {i} palavra_certa = {palavra_certa} habilitado={habilitado[linha].linha2} alteraPalavra={alteraPalavra} alteraSubmit={alteraSubmit} mudaLinha = {mudaLinha} palavra = {palavra} submit = {submit} linha = {linha} alteraLinha={alteraLinha}/>
                    <Linha i = {i} palavra_certa = {palavra_certa} habilitado={habilitado[linha].linha3} alteraPalavra={alteraPalavra} alteraSubmit={alteraSubmit} mudaLinha = {mudaLinha} palavra = {palavra} submit = {submit} linha = {linha} alteraLinha={alteraLinha}/>
                    <Linha i = {i} palavra_certa = {palavra_certa} habilitado={habilitado[linha].linha4} alteraPalavra={alteraPalavra} alteraSubmit={alteraSubmit} mudaLinha = {mudaLinha} palavra = {palavra} submit = {submit} linha = {linha} alteraLinha={alteraLinha}/>
                    <Linha i = {i} palavra_certa = {palavra_certa} habilitado={habilitado[linha].linha5} alteraPalavra={alteraPalavra} alteraSubmit={alteraSubmit} mudaLinha = {mudaLinha} palavra = {palavra} submit = {submit} linha = {linha} alteraLinha={alteraLinha}/>
                    <Linha i = {i} palavra_certa = {palavra_certa} habilitado={habilitado[linha].linha6} alteraPalavra={alteraPalavra} alteraSubmit={alteraSubmit} mudaLinha = {mudaLinha} palavra = {palavra} submit = {submit} linha = {linha} alteraLinha={alteraLinha}/>
                </div>
            </div>
        </div>
        :
        <div id="termo">
            <div className="boxJogo">
                <h1 className="lblTermo">Carregando...</h1>
                
            </div>
        </div>
    );
}