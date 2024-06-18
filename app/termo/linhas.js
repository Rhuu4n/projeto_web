"use client"

import axios from "axios";
import './termo.css'
import { useEffect, useRef, useState } from 'react'

  export default function Linha( {i, palavra_certa, habilitado, alteraPalavra, alteraSubmit, palavra, submit, mudaLinha, linha, alteraLinha, vetor} ) { 
    
    const [letra, alteraLetra] = useState()
    const [campo, alteraCampo] = useState(1)
    const inputs = useRef([])
    const [palavra_nova, alteraPalavraNova] = useState([]);
    const [caractereExtraido1, alteraCaractere1] = useState("");
    const index1 = 0;
    const index2 = 1;
    const index3 = 2;
    const index4 = 3;
    const index5 = 4;
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
        } else if (event.key === 'Backspace') {
            if (inputs.current[index].value !== '') {
                inputs.current[index].value = ''
                alteraLetra('')
            }
             else {
                const prevCampo = index - 1
                if (prevCampo >= 0) {
                    inputs.current[prevCampo].focus()
                    alteraCampo(prevCampo + 1)
                }
            }
        } else if (event.key === 'ArrowLeft'){
            const prevCampo = index - 1
                if (prevCampo >= 0) {
                    inputs.current[prevCampo].focus()
                    alteraCampo(prevCampo + 1)
                }
        }  else if (event.key === 'ArrowRight'){
            const proxCampo = index + 1
                if (proxCampo >= 0 && index < 4) {
                    inputs.current[proxCampo].focus()
                    alteraCampo(proxCampo - 1)
                }
        }
    }
 
    function verificaPalavra() {

        console.log(validarPalavra(palavra));

        if (validarPalavra(palavra) == false){
            if (palavra == palavra_certa[i].palavra){
                alteraLinha(6);
                alteraInput();
                alert("Acertou!!")
            }
            else if(palavra.length == 5){
                mudaLinha();
                alteraInput();
            }
        }
    }
    
    function alteraInput(){
        confereCor(inputs.current[0].value, 0, 1);
        confereCor(inputs.current[1].value, 1, 2);
        confereCor(inputs.current[2].value, 2, 3);
        confereCor(inputs.current[3].value, 3, 4);
        confereCor(inputs.current[4].value, 4, 5);
    }

    function confereCor(caractere, posicao, num) {
        const extracao = palavra_certa[0].palavra.charAt(0);
        alteraCaractere1(extracao);
        
        if (posicao <= palavra_certa[i].palavra.length){
        }

        if (caractere == palavra_certa[i].palavra.charAt(index1) ||
            caractere == palavra_certa[i].palavra.charAt(index2) ||
            caractere == palavra_certa[i].palavra.charAt(index3) ||
            caractere == palavra_certa[i].palavra.charAt(index4) ||
            caractere == palavra_certa[i].palavra.charAt(index5)) {
            input1 = document.getElementsByClassName(`txt${num}`)[linha]
            input1 = input1.style.background = "yellow"
        }

        if (caractere == palavra_certa[i].palavra.charAt(posicao)) {
            input1 = document.getElementsByClassName(`txt${num}`)[linha]
            input1 = input1.style.background = "green"
        }

    }

    function validarPalavra(palavra) {
        // Verifica se a palavra não tem mais de 2 letras consecutivas iguais
        const regexLetrasConsecutivas = /([a-zA-Zà-úÀ-Ú])\1{2}/;
        if (regexLetrasConsecutivas.test(palavra)) {
            return false;
        }
        
        // Verifica se a palavra não tem mais de 2 consoantes consecutivas
        const regexConsoantesConsecutivas = /[^aeiou]{3}/;
        if (regexConsoantesConsecutivas.test(palavra)) {
            return false;
        }
        
        // Verifica se a palavra não tem mais de 3 vogais consecutivas
        const regexVogaisConsecutivas = /[aeiou]{4}/;
        if (regexVogaisConsecutivas.test(palavra)) {
            return false;
        }
        
        // Verifica se a palavra não tem mais de 2 vogais consecutivas iguais
        const regexVogaisConsecutivasIguais = /([aeiou])\1{1}/;
        if (regexVogaisConsecutivasIguais.test(palavra)) {
            return false;
        }
        
        return true;
    }



    return (
        <form id="linha">
            {[1, 2, 3, 4, 5].map((num) => (
                <input
                    readOnly={habilitado}
                    className={`txt${num}`}
                    onChange={(event) => inserir(event)}
                    onKeyDown={(event) => Submit(event, num - 1)}
                    ref={(el) => (inputs.current[num - 1] = el)}
                />
            ))}
        </form>
    )
}