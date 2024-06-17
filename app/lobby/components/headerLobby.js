import Botao from '../../components/botao'
import './headerLobby.css'

const HeaderLobby = props => {
  return (
    <header id="headerLobby">
      <Botao content="Voltar" />
      <p>ID da sala: {props.idSala}</p>
    </header>
  )
}

export default HeaderLobby
