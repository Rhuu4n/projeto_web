const BoxJogadores = (props) => {
    return (
        <div>
            <h2>Jogadores:</h2>
            <ul>
                <li><p>{props.jogador1}</p></li>
                <li><p>{props.jogador2}</p></li>
                <li><p>{props.jogador3}</p></li>
                <li><p>{props.jogador4}</p></li>
            </ul>
        </div>
    );
}
 
export default BoxJogadores;