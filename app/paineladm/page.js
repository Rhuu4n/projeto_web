"use client"
import axios from "axios"
import { useState, useEffect } from "react";
import "./paineladm.css"

export default function PainelAdministrativo(){

const [selecaoTabela, alteraSelecaoTabela] = useState("Estatisticas");

const [ranking, alteraRanking] = useState ([]);
const [estatisticas, alteraEstatisticas] = useState (0);
const [numJogadores, alteraNumJogadores] = useState (0);


function buscaRanking(){
    axios.get("/api/users", {
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(function(response){
        console.log(response.data)
        alteraRanking(response.data)
    })
}


function buscaEstatisticas(){
    axios.get("/api/users", {
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(function(response){
        console.log(response.data)
        alteraEstatisticas(response.data)
    })
}

function buscaNumJogadores(){
    axios.get("/api/users", {
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(function(response){
        console.log(response.data)
        alteraNumJogadores(response.data)
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


useEffect(()=> {
    buscaRanking();
}, []);




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
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Ranking</th> 
                            <th>pontos</th>
                            <th>email</th>
                        </tr>
                        {ranking.map(r => {return <tr>
                            <td>{r.nome}  </td>
                            <td>{r.id} </td>
                            <td>{r.nascimento}</td>
                            <td>{r.email}</td>
                        </tr>
                        })}
                        
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