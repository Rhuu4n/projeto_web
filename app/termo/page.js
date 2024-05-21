"use client"
import "./termo.css"
import Linha from "./linhas";

export default function Termo(props){

    let habilitado = [
        {
            linha1: "",
            linha2: "disable",
            linha3: "disable",
            linha4: "disable",
            linha5: "disable",
            linha6: "disable"
        },{
            linha1: "disable",
            linha2: "",
            linha3: "disable",
            linha4: "disable",
            linha5: "disable",
            linha6: "disable"
        },{
            linha1: "disable",
            linha2: "disable",
            linha3: "",
            linha4: "disable",
            linha5: "disable",
            linha6: "disable"
        },{
            linha1: "disable",
            linha2: "disable",
            linha3: "disable",
            linha4: "",
            linha5: "disable",
            linha6: "disable"
        },{
            linha1: "disable",
            linha2: "disable",
            linha3: "disable",
            linha4: "disable",
            linha5: "",
            linha6: "disable"
        },{
            linha1: "",
            linha2: "disable",
            linha3: "disable",
            linha4: "disable",
            linha5: "disable",
            linha6: ""
        }
        ]

    return(
        <div id="termo">
            <h1 className="lblTermo">Termo</h1>

            <Linha habilitado={habilitado[0].linha1}/>
            <Linha habilitado={habilitado[0].linha2}/>
            <Linha habilitado={habilitado[0].linha3}/>
            <Linha habilitado={habilitado[0].linha4}/>
            <Linha habilitado={habilitado[0].linha5}/>
            <Linha habilitado={habilitado[0].linha6}/>

        </div>
    );
}