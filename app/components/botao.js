import "./botao.css"

const Botao = (props) => {
    return (
        <button className="botao">{props.content}</button>
    );
}
 
export default Botao;