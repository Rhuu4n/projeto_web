import Botao from '../../components/botao'
import './footerLobby.css'
import axios from 'axios'

const FooterLobby = props => {
  async function iniciaPartida() {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.put(
        `/api/rooms/${props.idSala}`,
        {
          estadoSala: '2'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        }
      )
      // props.alteraSalaOrLobby('partida')
      console.log(response.data)
    } catch (error) {
      console.log('erro: ' + error)
      if (error.response && error.response.status === 404) {
        alert('Sala nao encontrada')
      } else if (error.response && error.response.status === 401) {
        console.error('erro:' + error)
        router.push('/autenticacao')
      } else {
        alert('Erro ao iniciar a partida')
      }
    }
  }

  return (
    <footer id="footer">
      <Botao
        acao={() => {
          if (props.cheia) {
            alert('a sala nao esta cheia, aguarde jogadores')
          } else {
            iniciaPartida()
          }
        }}
        content="Iniciar"
      />
    </footer>
  )
}

export default FooterLobby
