"use client"
import { useState } from "react";
import "./paineladm.css"
export default function PainelAdministrativo(){
const [selecaoTabela, alteraSelecaoTabela] = useState("Estatisticas");

return(
    <div id="flex-container">
        <header className="PaineladmPrincipal">
            <h1>Painel ADM</h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a><a href="#">Paginas</a><a href="#">Configurações</a></li>
                    </ul>
                </nav>
        </header>
        <aside id="PainelLateral" >
            <br/>
            <h2>Painel de Controle</h2>
                <ul>
                    <li>Estatisticas <button onClick={()=> alteraSelecaoTabela("Estatisticas")} >Acessar</button> </li> 
                    <li>Ranking <button onClick={()=> alteraSelecaoTabela("Ranking")}>Acessar</button> </li>
                    <li>Numero de jogadores<button onClick={()=> alteraSelecaoTabela("Numerojogadores")}>Acessar</button> </li>
                </ul>
        </aside>
        <br/>
        <main>
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
                            <th >Total de usuários</th> <td>Usuários: 50</td>
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