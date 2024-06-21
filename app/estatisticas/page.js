"use client"

import { FaRankingStar } from "react-icons/fa6";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import axios from "axios"
import Link from "next/link";
import { useState, useEffect } from "react";
import "./painelEstatisticas.css"

export default function PainelAdministrativo(){

const [selecaoTabela, alteraSelecaoTabela] = useState("Estatisticas");

const [ranking, alteraRanking] = useState ([]);
const [estatisticas, alteraEstatisticas] = useState ([]);
const [numJogadores, alteraNumJogadores] = useState ([]);

const tokenapi = localStorage.getItem('token')


function buscaRanking(){
    axios.get("/api/users", {
        headers:{
            'Content-type':'application/json',
            'token':tokenapi
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
            'Content-type':'application/json',
            'token':tokenapi
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
            'Content-type':'application/json',
            'token':tokenapi
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
            <header>
            <img className="iconeprincipal" src="icon/logoH1R4.svg"></img>
            </header>
            <div className="AreasPainelLateral">
                <button onClick={() => alteraSelecaoTabela("Estatisticas")}>
                <IoStatsChartSharp className="icones" />
                <span>Estatísticas</span>
                </button>
                <hr/>
                <button onClick={() => alteraSelecaoTabela("Ranking")}>
                <FaRankingStar className="icones" />
                    <span>Ranking</span> 
                </button>
                <hr/>
                <button onClick={() => alteraSelecaoTabela("Numerojogadores")}>
                <IoGameController className="icones" te />
                <span> Jogadores</span>
                </button>
            </div>
        </aside>
        <div className="Conteudo" >
            <header className="PaineladmHeader">
                <nav>
                    <ul>
                        <li><a href="./">Home</a></li>
                        <li><a href="./jogos">Paginas</a></li>
                    </ul>
                </nav>
            </header>
        
            <main>
            <br/>
                <div className="Tabelas"   >
                    {
                    selecaoTabela == "Estatisticas" &&   
                    <div className="TabelaEstatisticas" > 
                    <h1>Estatisticas de partidas Guilty</h1>
                        <table border={"true"} >
                        <thead>
                            <tr>
                                <th >Numero de partidas</th>
                                <th >Total de usuários</th>
                            </tr>
                        </thead>
                        <tbody>
                        {numJogadores.map (e => {return <tr>
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
                        <h1>Ranking Guilty 👑</h1>
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
                        <h1>Todos os jogadores do Guilty</h1>
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