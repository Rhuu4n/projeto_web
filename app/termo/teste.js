"use client"
import { useState, useRef } from "react";
import "./termo.css";

export default function Linha(props) {
    const [letra, alteraLetra] = useState();
    const [campo, alteraCampo] = useState(1);
    const inputsRef = useRef([]);

    function inserir(event) {
        const value = event.target.value;
        // Remove todos os caracteres que não são letras
        const newValue = value.replace(/[^a-zA-Z]/g, '');
        // Limita o valor a 1 caractere
        const limitedValue = newValue.slice(0, 1);
        // Atualiza o valor do campo
        event.target.value = limitedValue;
        alteraLetra(limitedValue);

        if (limitedValue) {
            // Muda o foco para o próximo input
            const nextCampo = campo + 1;
            alteraCampo(nextCampo);
            if (nextCampo > 5) {
                alteraCampo(1);
            } else {
                inputsRef.current[nextCampo - 1].focus();
            }
        }
    };

    return (
        <div id="linha">
            {[1, 2, 3, 4, 5].map((num) => (
                <input
                    key={num}
                    readOnly={props.disable}
                    className={`txt${num}`}
                    onChange={inserir}
                    ref={(el) => (inputsRef.current[num - 1] = el)}
                />
            ))}
        </div>
    );
}
