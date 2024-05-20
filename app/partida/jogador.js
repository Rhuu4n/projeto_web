import "./jogador.css"

const Jogador = (props) => {
    return (
        <div id="joguin" className={props.position}>
            <div className="box-infos">
                <p>Jogador 1</p>
                <div className="box-moedas">
                    <p  className="moedas">0x</p>
                    <img src="img/moedas.png"/>
                </div>
            </div>
            <div className="box-cartas">
                <img src="img/carta.png"/>
                <img src="img/carta.png"/>
            </div>
        </div>
    );
}
 
export default Jogador;