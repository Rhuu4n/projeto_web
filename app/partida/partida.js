import { useEffect, useRef, useState } from 'react'
import HeaderPartida from './headerPartida'
import Jogador from './jogador'
import './partida.css'
import axios from 'axios'

const Partida = props => { 
  const [mudaCartas, alteraMudaCartas] = useState(false)
  const [podeJogar, alteraPodeJogar] = useState(false)
  const [jogadorAtual, alteraJogadorAtual] = useState(0)
  const [jaRodou, alteraJaRodou] = useState(false)
  const [attribute, setAttribute] = useState(false)
  const initialized = useRef(false)

  let nomeJogadores = props.ordemJogadores
  let idJogadores = props.jogadoresIdPartida


  async function main(){
    const interval = setInterval(async () => {
      const token = localStorage.getItem('token')
      const response_room = await axios.get(`/api/rooms/${props.idSala}`, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })

      let resAtual = response_room.data.jogadorAtual

      if(resAtual == props.ordem && !jaRodou){
        alteraPodeJogar(true)
        alteraJogadorAtual(resAtual)
        alteraJaRodou(true)
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

  return (
    <div id="partida">
      <HeaderPartida />
      <div className="areaPartida">
        <div className="topo">
          <Jogador nome={nomeJogadores[2]} idPartida={idJogadores[2]}/>
        </div>
        <div className="meio">
          <div className="esquerda">
            <Jogador nome={nomeJogadores[1]} idPartida={idJogadores[1]} position="esquerda" />
          </div>
          <div className="centro"></div>
          <div className="direita">
            <Jogador nome={nomeJogadores[3]} idPartida={idJogadores[3]} position="direita" />
          </div>
        </div>
        <div className="fim">
          <Jogador podeJogar={podeJogar} nome={nomeJogadores[0]} idPartida={idJogadores[0]} position="eu"/>
        </div>
      </div>
    </div>
  )
}

export default Partida
