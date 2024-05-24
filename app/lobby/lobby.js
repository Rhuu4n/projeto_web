import HeaderLobby from "./components/headerLobby";
import BodyLobby from "./components/bodyLobby";
import FooterLobby from "./components/footerLobby";
import "./login.css"

export default function Lobby(props){
    return(
        <div id="login">
            <div className="container">
                <HeaderLobby idSala={props.idSala} className="container"/>
                <BodyLobby/>
                <FooterLobby/>
            </div>
        </div>
    )
}