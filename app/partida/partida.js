import { useEffect, useRef, useState } from 'react'
import HeaderPartida from './headerPartida'
import Jogador from './jogador'
import './partida.css'
import axios from 'axios'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Partida = props => {
  const [mudaCartas, alteraMudaCartas] = useState(false)
  const [podeJogar, alteraPodeJogar] = useState(false)
  const [jogadorAtual, alteraJogadorAtual] = useState(0)
  const [jaRodou, alteraJaRodou] = useState(false)
  const [attribute, setAttribute] = useState(false)
  const jaRodouRef = useRef(false)
  const podeJogarRef = useRef(false)
  const initialized = useRef(false)

  let nomeJogadores = props.ordemJogadores
  let idJogadores = props.jogadoresIdPartida

  async function main() {
    const interval = setInterval(async () => {
      console.log('inicio interval')
      const token = localStorage.getItem('token')
      const response_room = await axios.get(`/api/rooms/${props.idSala}`, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })

      let resAtual = response_room.data.jogadorAtual

      if (resAtual == props.ordem && !jaRodouRef.current) {
        console.log('entrou')
        alteraPodeJogar(true)
        alteraJaRodou(true)
        jaRodouRef.current = true
        podeJogarRef.current = true
      }

      if (attribute) {
        clearInterval(interval) // Para a rotina se o atributo mudar
        console.log('Atributo mudou, rotina parada')
      }
    }, 1000)
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      console.log(props.ordem)

      main()

      return () => setAttribute(true) // Limpeza do intervalo quando o componente for desmontado
    }
  }, [])

  useEffect(() => {}, [podeJogar])
  useEffect(() => {}, [jaRodou])

  return (
    <div id="partida">
      <ToastContainer />
      <HeaderPartida />
      <div className="areaPartida">
        <div className="topo">
          <Jogador nome={nomeJogadores[2]} idPartida={idJogadores[2]} />
        </div>
        <div className="meio">
          <div className="esquerda">
            <Jogador
              nome={nomeJogadores[1]}
              idPartida={idJogadores[1]}
              position="esquerda"
            />
          </div>
          <div className="centro"></div>
          <div className="direita">
            <Jogador
              nome={nomeJogadores[3]}
              idPartida={idJogadores[3]}
              position="direita"
            />
          </div>
        </div>
        <div className="fim">
          <Jogador
            podeJogarRef={podeJogarRef.current}
            podeJogar={podeJogar}
            nome={nomeJogadores[0]}
            idPartida={idJogadores[0]}
            position="eu"
          />
        </div>
      </div>
    </div>
  )
}

export default Partida
