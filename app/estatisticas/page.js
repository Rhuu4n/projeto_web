"use client"


import { AiOutlineLineHeight } from "react-icons/ai";
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
const [termo, alteraTermo] = useState ([]);
const [numAleatorio, alteraNumAleatorio] = useState(null);
let randomInt = Math.floor(Math.random() * 250) + 0;


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

    function buscaTermo(){
        axios.get("/api/termo", {
            headers:{
                'Content-type':'application/json',
                'token':tokenapi
            }
        })
        .then(function(response){
            console.log(response.data)
            alteraTermo(response.data)
        })
}

const reverseIds = (arr) => {
    if (!Array.isArray(arr)) return [];
    return [...arr].reverse();
  };

const reversedEstatisticas = reverseIds(estatisticas);

function randomNum() {
    console.log(numAleatorio);
    if (numAleatorio == null){
        alteraNumAleatorio(randomInt)
        return alteraNumAleatorio
    }
    

}

useEffect(()=> {
    buscaRanking();
    buscaEstatisticas();
    buscaNumJogadores();
    buscaTermo();
    randomNum();
}, []);

return(
    <div id="ADM">
        <aside className="PainelLateral" >
            <br/>
            <header>      
               
            <Link href="./">  <img className="iconeprincipal" src="icon/logoH1R4.svg"></img> </Link>
            </header>
            <div className="AreasPainelLateral">
                <button onClick={()=> randomNum()} >aaaa</button>
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
                <button onClick={() => alteraSelecaoTabela("Termo")}>
                <AiOutlineLineHeight className="icones" />
                <span>Termo</span>
                </button>
                
                
                
            </div>
        </aside>
        <div className="Conteudo" >
            <header className="PaineladmHeader">
                <nav>
                    <button>
                    <Link href="./"> <span>Home</span> </Link>
                    </button>
                    <button>
                    <Link href="./jogos"> <span>Jogos</span> </Link>
                    </button>
                    <button>
                    <Link href="http://10.60.46.49:8081/wordpress"> <span>Blog</span> </Link>
                    </button>
                </nav>
            </header>
        
            <main>
            <br/>
            <div className="Tabelas"   >
                {
                selecaoTabela == "Estatisticas" &&   
                <div className="TabelaEstatisticas" > 
                <h1>Estatisticas Guilty</h1>
                <table border={"true"}>
        <thead>
            <tr>
                <th>Usuario</th>
                <th>Numero de Partidas</th>
            </tr>
        </thead>
        <tbody>
        {ranking.slice(0, 50).map((r, index) => {
                      const e = estatisticas[index] || {};
                      const reversedE = reversedEstatisticas[index] || {};
                      return (
                        <tr key={r.id}>
                          <td>{r.nome}</td>
                          <td>{reversedE.id_sala}</td>
                        </tr>
                      );
                    })}
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
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ranking.slice(0,15).map(r => {return <tr>
                            <td>{r.nome}  </td>
                            <td>{r.id}° </td>
                            <td>{r.email}</td>
                        </tr>
                        })}
                        
                    </tbody>
                    </table>
                </div>
                }
                
                {
                selecaoTabela == "Termo" &&   
                <div className="TabelaTermo" > 
                <h1>Termo</h1>
                    <table border={"true"} >
                    <thead>
                        <tr>
                            <th >Palavras Cadastradas</th>
                            <th >Vezes encontradas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {termo?.map(T => {return <tr>
                            <td>{T.palavra}</td>
                            <td>{numAleatorio}</td>
                        </tr> })}
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