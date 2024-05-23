"use client"
import axios from "axios"
import { useState, useEffect } from "react";
import "./paineladm.css"

export default function PainelAdministrativo(){

const [selecaoTabela, alteraSelecaoTabela] = useState("Estatisticas");

const [ranking, alteraRanking] = useState (0);
const [estatisticas, alteraEstatisticas] = useState (0);
const [numJogadores, alteraNumJogadores] = useState (0);


function buscaRanking(){
    axios.get("/api/users", {
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(function(response){
        console.log(response)
        //alteraRanking(response.data.message)
    })
}


function buscaEstatisticas(){
    axios.get("http://10.60.46.21:5000/users")
    .then(function(response){
        console.log(response)
        //alteraRanking(response.data.message)
    })
}

function buscaNumJogadores(){
    axios.get("http://10.60.46.21:5000/users")
    .then(function(response){
        console.log(response)
        //alteraRanking(response.data.message)
    })
}



const Estatisticas = [
    {
        NumPartidas: 0,
        Total_de_usuarios: 0
    }
]

const Ranking = [

    {
        Nome: "",
        Ranking: 0, 
        Pontos: 0
    }
]

const NumJogadores = [
    {
        NumJogadoresTotais: 0,
        NumJogadoresOnline: 0
    }
]



return(
    <div id="ADM">
        <header className="PaineladmHeader">
        <img src="https://i.pinimg.com/736x/a9/97/ca/a997ca78d01388ec1aed5c58464efc39.jpg" ></img>
                <h1>Guilty</h1>
                <nav>
                    <ul>
                        <button onClick={()=> buscaRanking()} >Teste</button>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Paginas</a></li>
                        <li><a href="#">Configurações</a></li>
                    </ul>
                </nav>
        </header>
        <main className="Conteudo" >
        <aside className="PainelLateral" >
            <br/>
            <h2>Painel de Controle</h2>
                <ul>
                    <li onClick={()=> alteraSelecaoTabela("Estatisticas")} >Estatisticas </li> 
                    <li onClick={()=> alteraSelecaoTabela("Ranking")}>Ranking</li>
                    <li onClick={()=> alteraSelecaoTabela("Numerojogadores")} >Numero de jogadores</li>
                </ul>
        </aside>
        <br/>
            <div className="Tabelas" >
                {
                selecaoTabela == "Estatisticas" &&   
                <div className="TabelaEstatisticas" >
                    <table border={"true"} >
                    <caption>Estatisticas</caption>
                    <thead>
                        <tr>
                            <th >Numero de partidas</th> <td>20 Partidas</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th >Total de usuários</th> <td>50 Usuarios</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                }   
                {
                selecaoTabela == "Ranking" &&
                <div className="TabelaNumerojogadores" >
                    <table border={"true"} >
                    <caption>Ranking</caption>
                    <thead>
                        <tr>
                            <th >Nome</th>
                            <th>Ranking</th>
                            <th>pontos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Danilo</td>
                            <td>1°</td>
                            <td>53</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                }
                {
                selecaoTabela == "Numerojogadores" &&
                <div className="TabelaRanking">
                    <table border={"true"} >
                    <caption>Numero de jogadores</caption>
                    <thead>
                        <tr>
                            <th >Numero de jogadores totais</th>  <td>3500</td>
                        </tr>
                        <tr>
                            <th >Numero de jogadores online</th> <td>150</td>
                        </tr>
                    </thead>
                </table>
                </div>
                }
            </div>
        </main>

        <footer>
            <a href="https://github.com/Rhuu4n/projeto_web.git" target="blank" > Game Guilty, algo assim</a>
        </footer>
    </div>
)
}