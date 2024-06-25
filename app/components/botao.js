import './botao.css'

const Botao = props => {
  return (
    <button onClick={props.acao} className={props.cl + ' botao'}>
      {props.content}
    </button>
  )
}

export default Botao
