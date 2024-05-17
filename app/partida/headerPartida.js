import Botao from "../components/botao";
import "./headerPartida.css"

const HeaderPartida = () => {
    return (
        <header id="header">
            <Botao content="Pausar"/>
            <p>Vez de: jogador1</p>
        </header>
    );
}
 
export default HeaderPartida;