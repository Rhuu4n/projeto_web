"use client"
import { useRef, useState } from "react";
import "./termo.css"

export default function Linha(props){

    const [palavra, alteraPalavra] = useState("");
    
    const [submit, alteraSubmit] = useState(0);

    const [letra, alteraLetra] = useState();

    const [campo, alteraCampo] = useState(1);

    const inputs = useRef([]);

    function inserir(event){
        const value = event.target.value;
        // Remove todos os caracteres que não são números
        const newValue = value.replace(/[^a-zA-Z]/g, '').toUpperCase();
        // Limita o valor a 4 caracteres
        const limitedValue = newValue.slice(0, 1);
        // Atualiza o valor do campo
        event.target.value = limitedValue;
        alteraLetra(limitedValue);
        //document.querySelector(".txt" + campo).focus()
        if (limitedValue) {
            // Muda o foco para o próximo input
            const nextCampo = campo + 1;
            alteraCampo(nextCampo);
            if (nextCampo > 5) {
                alteraCampo(0);
            } else {
                inputs.current[nextCampo - 1].focus();
            }
            
        }
    };

    function Submit(event, index) {
        if (event.key === 'Enter') {
          Palavra(event);
        } else if (event.key === 'Backspace') {
          if (inputs.current[index].value !== '') {
            inputs.current[index].value = '';
            alteraLetra('');
          } else {
            const prevCampo = index - 1;
            if (prevCampo >= 0) {
              inputs.current[prevCampo].focus();
              alteraCampo(prevCampo + 1);
            }
          }
        }
      }

    function Palavra(event){
        event.preventDefault();

        const input1 = document.getElementsByClassName(`txt1`)[0].value;
        const input2 = document.getElementsByClassName(`txt2`)[0].value;
        const input3 = document.getElementsByClassName(`txt3`)[0].value;
        const input4 = document.getElementsByClassName(`txt4`)[0].value;
        const input5 = document.getElementsByClassName(`txt5`)[0].value;

        alteraPalavra(`${input1 + input2 + input3 + input4 +input5}`);

        alert(palavra);

        if (submit > 6){
          alteraSubmit(0)
        }
    }

    return(
        <form id="linha"  >

            {[1, 2, 3, 4, 5].map((num) => (
            <input  readOnly={props.habilitado}
                    className={`txt${num}`}
                    onChange={(event)=> inserir(event)}
                    onKeyDown={(event) => Submit(event, num - 1)}
                    ref={(el) => (inputs.current[num - 1] = el)}
                    />
                    ))}
        </form>
    );
}