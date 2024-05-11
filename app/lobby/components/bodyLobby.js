import BoxJogadores from "./boxJogadores";
import "./bodyLobby.css"

const BodyLobby = () => {
    return (
        <main id="bodylobby"> 
            <BoxJogadores jogador1="jogador1" jogador2="jogador2" jogador3="jogador3" jogador4="jogador4"/>
        </main>
    );
}
 
export default BodyLobby;