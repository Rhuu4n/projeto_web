import "./paineladm.css"
export default function PainelAdministrativo(){
    return(
        <div id="Tablesadm">
            <div>
                <header>
                    <section className="SeçãoCabeçalho" >
                    <h1>Painel ADM</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Páginas</a></li>
                            <li><a href="#">Configurações</a></li>
                        </ul>
                    </nav>
                    </section>
                </header>
                <main>
                    <section className="SeçãoTabelas" >
                    <h2>Painel de Controle</h2>

                <div >
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

                <div>
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
                    </section>
                </main>

                <footer>
                    <a href="https://github.com/Rhuu4n/projeto_web.git" target="blank" > Game Guilty, algo assim</a>
                </footer>
            </div>
        </div>
    )
}