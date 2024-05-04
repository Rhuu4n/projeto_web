import Header_Salas from "../components/header-salas"
import Criar_Salas from "../components/criar-salas"

export default function Jogo(){
    return(
        <div>
            <Header_Salas link="img/logo.png" nome="Jorge"/>

            <hr/>

            <Criar_Salas/>
        </div>
    )
}