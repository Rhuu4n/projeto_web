import Header_Salas from "../components/header-salas"
import Criar_Salas from "../components/criar-salas"
import "./salas.css"

export default function Jogo(){
    return(
        <div id="salas">
            <Header_Salas link="img/logo.png" nome="Jorge"/>

            <Criar_Salas/>
        </div>
    )
}