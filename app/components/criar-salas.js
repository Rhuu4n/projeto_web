import { useState } from "react";
import Botao from "./botao";

export default function Criar_Salas(props){

    const [idSala, alteraIdSala] = useState("");

    function alteraInput(event){
        const value = event.target.value;
        // Remove todos os caracteres que não são números
        const newValue = value.replace(/\D/g, '');
        // Limita o valor a 4 caracteres
        const limitedValue = newValue.slice(0, 4);
        // Atualiza o valor do campo
        event.target.value = limitedValue;
        alteraIdSala(limitedValue);
    };
    
    function enviarIdSala(event) {
        event.preventDefault();
        alteraIdSala();
        alert(idSala);
    }

    return(
        <div className="boxPartida">

            <img src={props.link}/>

            <Botao content="Criar sala"/>

            <form onSubmit={(event)=> enviarIdSala(event)}>

                <div className="boxEntrar">
                    <input type="text" className="txtEntrar" onChange={(event)=> alteraInput(event)}/>
                    <button className="btnEntrar">Entrar</button>
                </div>
            </form>
        </div>
    );
}
