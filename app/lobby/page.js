import HeaderLobby from "./components/headerLobby";
import BodyLobby from "./components/bodyLobby";
import FooterLobby from "./components/footerLobby";
import "./login.css"

export default function Lobby(){
    return(
        <div id="login">
            <div className="container">
                <HeaderLobby className="container"/>
                <BodyLobby/>
                <FooterLobby/>
            </div>
        </div>
    )
}