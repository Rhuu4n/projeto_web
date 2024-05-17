"use client"
import { useRef, useState } from "react";
import "./termo.css"

export default function Linha(props){

    const [letra, alteraLetra] = useState();

    const [campo, alteraCampo] = useState(1);

    const inputsRef = useRef([]);

    let readOnly = [
        {
            enable:"",
            disable: "disable"
        }
        ]

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
                inputsRef.current[nextCampo - 1].focus();
            }
        }
    };

    return(
        <div id="linha" onSubmit={props.submit}>
            {[1, 2, 3, 4, 5].map((num) => (
            <input  readOnly={readOnly[0].props.readOnly}
                    className={`txt${num}`}
                    onChange={(event)=> inserir(event)}
                    ref={(el) => (inputsRef.current[num - 1] = el)}/>))}
        </div>
    );
}