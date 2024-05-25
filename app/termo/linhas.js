"use client"

import axios from "axios";
import './termo.css'
import { useEffect, useRef, useState } from 'react'

  export default function Linha( {palavra_certa, habilitado, alteraPalavra, alteraSubmit, palavra, submit, mudaLinha, linha, alteraLinha} ) { 
    
    const [letra, alteraLetra] = useState()
    const [campo, alteraCampo] = useState(1)
    const inputs = useRef([])
    const [palavra_nova, alteraPalavraNova] = useState([]);
    const [cor, alteraCor] = useState("pink")
    const [index1, alteraIndex1] = useState(0);
    const [index2, alteraIndex2] = useState(1);
    const [index3, alteraIndex3] = useState(2);
    const [index4, alteraIndex4] = useState(3);
    const [index5, alteraIndex5] = useState(4);
    const [caractereExtraido1, alteraCaractere1] = useState("");
    const [caractereExtraido2, alteraCaractere2] = useState("");
    const [caractereExtraido3, alteraCaractere3] = useState("");
    const [caractereExtraido4, alteraCaractere4] = useState("");
    const [caractereExtraido5, alteraCaractere5] = useState("");
    let input1 = "";
    let input2 = "";
    let input3 = "";
    let input4 = "";
    let input5 = "";

    // api --------------------------------------

    function postPalavra(){
        const obj = {
            "palavra":palavra_nova
        }

        axios.post("/api/termo", obj, {
            headers:{'Content-Type':'application/json'}
        })
        .then(
            function(response){
                alteraPalavraNova( response.data )
            }
        )
    }

    // api --------------------------------------
 
    function inserir(event) {
        const value = event.target.value
        // Remove todos os caracteres que não são números
        const newValue = value.replace(/[^a-zA-Z]/g, '').toUpperCase()
        // Limita o valor a 4 caracteres
        const limitedValue = newValue.slice(0, 1)
        // Atualiza o valor do campo
        event.target.value = limitedValue
        alteraLetra(limitedValue)
        //document.querySelector(".txt" + campo).focus()
        if (limitedValue) {
            // Muda o foco para o próximo input
            const nextCampo = campo + 1
            alteraCampo(nextCampo)
            if (nextCampo > 5) {
                alteraCampo(0)
            } else {
                inputs.current[nextCampo - 1].focus()
            }
        }
        input1 = document.getElementsByClassName(`txt1`)[linha].value
        input2 = document.getElementsByClassName(`txt2`)[linha].value
        input3 = document.getElementsByClassName(`txt3`)[linha].value
        input4 = document.getElementsByClassName(`txt4`)[linha].value
        input5 = document.getElementsByClassName(`txt5`)[linha].value
 
        alteraPalavra(`${input1 + input2 + input3 + input4 + input5}`)
        alteraPalavraNova(`${input1 + input2 + input3 + input4 + input5}`)

    }
 
    function Submit(event, index) {
        if (event.key === 'Enter') {
            verificaPalavra(event);
            confereCor();
        } else if (event.key === 'Backspace') {
            if (inputs.current[index].value !== '') {
                inputs.current[index].value = ''
                alteraLetra('')
            } else {
                const prevCampo = index - 1
                if (prevCampo >= 0) {
                    inputs.current[prevCampo].focus()
                    alteraCampo(prevCampo + 1)
                }
            }
        }
    }
 
    function verificaPalavra() {
        if (palavra == palavra_certa[0].palavra){
            alteraLinha(6);
            alert("Palavra correta parabéns!");
        }
        else if(palavra.length == 5){
            alert("Errou!");
            mudaLinha();
          }
    }

    function confereCor() {
        const extracao = palavra_certa[0].palavra.charAt(index1);
        
        if (index1 <= palavra_certa[0].palavra.length){
            alteraCaractere1(extracao);
        }
        console.log(caractereExtraido1);

        if (caractereExtraido1 != palavra.charAt(index1)){
            alteraCor("red")
        }
    }

    

    return (
        <form id="linha">
            {[1, 2, 3, 4, 5].map((num) => (
                <input
                    readOnly={habilitado}
                    className={`txt${num}`}
                    style = {{background : cor}}
                    onChange={(event) => inserir(event)}
                    onKeyDown={(event) => Submit(event, num - 1)}
                    ref={(el) => (inputs.current[num - 1] = el)}
                />
            ))}
        </form>
    )
}