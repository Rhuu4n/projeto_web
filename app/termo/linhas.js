"use client"

import axios from "axios";
import './termo.css'
import { useEffect, useRef, useState } from 'react'
import e from "cors";

  export default function Linha( {toast, i, palavra_certa, habilitado, alteraPalavra, alteraSubmit, palavra, submit, mudaLinha, linha, alteraLinha, vetor} ) { 
    
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
                    alteraCampo(prevCampo)
                } else if (index == 0) {
                    inputs.current[index + 4].focus()
                    alteraCampo(4)
                }
        }  else if (event.key === 'ArrowRight'){
            const prevCampo = index + 1
                if (prevCampo >= 0 && index < 4) {
                    const currentIndex = inputs.current.indexOf(event.target);
                    inputs.current[currentIndex].focus();
                    setTimeout(() => inputs.current[currentIndex + 1].setSelectionRange(0, 0), 0);
                    inputs.current[prevCampo].focus()
                    alteraCampo(prevCampo)
                } else if (index >= 4) {
                    const currentIndex = inputs.current.indexOf(event.target);
                    inputs.current[currentIndex].focus();
                    setTimeout(() => inputs.current[currentIndex - 4].setSelectionRange(0, 0), 0);
                    alteraCampo(0)
                    inputs.current[index - 4].focus()
                }
        }
    }
 
    function verificaPalavra(e) {
        e.preventDefault();

        if (validarPalavra(palavra) === true){
            if (palavra == palavra_certa[i].palavra){
                alteraLinha(6);
                alteraInput();
                toast.success("ACERTOU!!");
                alteraPalavra(palavra + ".")
            }
            else if(palavra.length == 5){
                mudaLinha();
                alteraInput();
            }
            if(linha == 5){
                alteraLinha(6);
                toast.error("Errou a palavra certa è " + palavra_certa[i].palavra);
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
        input1 = document.getElementsByClassName(`txt${num}`)[linha]
        
        if (posicao <= palavra_certa[i].palavra.length){
        }

        try{
            if (input1.style.background != "green"){
                if (caractere == palavra_certa[i].palavra.charAt(index1) ||
                    caractere == palavra_certa[i].palavra.charAt(index2) ||
                    caractere == palavra_certa[i].palavra.charAt(index3) ||
                    caractere == palavra_certa[i].palavra.charAt(index4) ||
                    caractere == palavra_certa[i].palavra.charAt(index5)) {
                    input1.style.background = "rgb(207, 204, 0)"
                }
        
                if (caractere == palavra_certa[i].palavra.charAt(posicao)) {
                    input1.style.background = "green"
                }
            }
        }catch{
        }
    }

    function validarPalavra(palavra) {
        let errado = [
            {palavra: "AEIOU"},
            {palavra: "AAAAA"},
            {palavra: "BBBBB"},
            {palavra: "CCCCC"},
            {palavra: "DDDDD"},
            {palavra: "EEEEE"},
            {palavra: "FFFFF"},
            {palavra: "GGGGG"},
            {palavra: "HHHHH"},
            {palavra: "IIIII"},
            {palavra: "JJJJJ"},
            {palavra: "KKKKK"},
            {palavra: "LLLLL"},
            {palavra: "MMMMM"},
            {palavra: "NNNNN"},
            {palavra: "OOOOO"},
            {palavra: "PPPPP"},
            {palavra: "QQQQQ"},
            {palavra: "RRRRR"},
            {palavra: "SSSSS"},
            {palavra: "TTTTT"},
            {palavra: "UUUUU"},
            {palavra: "VVVVV"},
            {palavra: "WWWWW"},
            {palavra: "XXXXX"},
            {palavra: "YYYYY"},
            {palavra: "ZZZZZ"}
        ]
        for (let i = 0; i < errado.length; i++) {
            if (palavra === errado[i].palavra) {
                return false;
            }
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
            <button
              className="btnTeste"
              onClick={(e)=> verificaPalavra(e)}
              disabled = {habilitado}
              >
                Testar
            </button>
        </form>
    )
}