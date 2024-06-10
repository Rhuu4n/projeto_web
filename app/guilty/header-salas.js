import Botao from "../components/botao";
import "./header-salas.css"

export default function Header_Salas(props){
    return( 
        <div id="headerSalas">

            <div className="boxUser">

                <p className="lblUser">Usuario: {props.nome}, conectado</p>

                <Botao content="Sign out"/>

            </div>
            
            <p className="lblLogo">Guilty</p>
        </div>
     );
}