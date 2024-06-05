"use client"
import axios from "axios"
import { useState, useEffect } from "react";
import "./paineladm.css"

export default function PainelAdministrativo(){

const [selecaoTabela, alteraSelecaoTabela] = useState("Estatisticas");

const [ranking, alteraRanking] = useState ([]);
const [estatisticas, alteraEstatisticas] = useState ([]);
const [numJogadores, alteraNumJogadores] = useState ([]);


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
    axios.get("/api/rooms", {
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
    axios.get("/api/rooms", {
        headers:{
            'Content-type':'application/json'
        }
    })
    .then(function(response){
        console.log(response.data)
        alteraNumJogadores(response.data)
    })
}


useEffect(()=> {
    buscaRanking();
    buscaEstatisticas();
    buscaNumJogadores();
}, []);




return(
    <div id="ADM">
         <aside className="PainelLateral" >
            <br/>
            <h2>Painel de Controle</h2>
                <ul>
                    <li onClick={()=> alteraSelecaoTabela("Estatisticas")} >↗  Estatisticas </li> 
                    <li onClick={()=> alteraSelecaoTabela("Ranking")}> 🏆 Ranking</li>
                    <li onClick={()=> alteraSelecaoTabela("Numerojogadores")}> 🎮 Numero de jogadores</li>
                </ul>
        </aside>
        <div className="Conteudo" >
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
        
            <main>
            <br/>
                <div className="Tabelas"   >
                    {
                    selecaoTabela == "Estatisticas" &&   
                    <div className="TabelaEstatisticas" >
                        <table border={"true"} >
                        <thead>
                            <tr>
                                <th >Numero de partidas</th>
                                <th >Total de usuários</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numJogadores.map(e => {return <tr>
                                    <td>{e.estadoSala}</td>
                                    <td>{e.id_sala}</td>
                                </tr>
                            } )}
                        </tbody>
                        </table>
                    </div>
                    }   
                    {
                    selecaoTabela == "Ranking" &&
                    <div className="TabelaNumerojogadores" >
                        <table border={"true"} >
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ranking</th> 
                                <th>pontos</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ranking.map(r => {return <tr>
                                <td>{r.nome}  </td>
                                <td>{r.id} </td>
                                <td>{r.id}</td>
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
                        <thead>
                            <tr>
                                <th >Numero de jogadores totais</th> 
                                <th >Numero de jogadores online</th>
                            </tr>
                        </thead>
                        <tbody>
                            {numJogadores.map(M => {return <tr>
                                <td>{M.estadoSala}</td>
                                <td>{M.numeroJogadores}</td>
                            </tr>})}
                        </tbody>
                    </table>
                    </div>
                    }
                   
                </div>
            </main>
        </div>
        
    </div>
)
}