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
  const [roubar, alteraRoubar] = useState(false)
  const [quemRoubar, alteraQuemRoubar] = useState(0)
  const [moedas, alteraMoedas] = useState([2, 2, 2, 2])
  const jaRodouRef = useRef(false)
  const podeJogarRef = useRef(false)
  const vezDeRef = useRef(0)
  const moedasAltera = useRef(false)
  const initialized = useRef(false)

  let nomeJogadores = props.ordemJogadores
  let idJogadores = props.jogadoresIdPartida

  const updatePodeJogarRef = newValue => {
    podeJogarRef.current = newValue
  }

  async function verificaMoedas(param) {
    console.log('verificando moedas')
    moedasAltera.current = true

    setTimeout((moedasAltera.current = false), 2500)
  }

  async function main() {
    const interval = setInterval(async () => {
      console.log('inicio interval')
      const token = localStorage.getItem('token')

      if (!podeJogarRef.current) {
        const response_room = await axios.get(`/api/rooms/${props.idSala}`, {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        })

        let resAtual = response_room.data.jogadorAtual

        if (resAtual == props.ordem) {
          console.log('ovo joga')
          podeJogarRef.current = true
          alteraPodeJogar(true)
        }

        if (resAtual != vezDeRef.current) {
          console.log('mudou ai')
          verificaMoedas()

          vezDeRef.current = resAtual
        }
      } else {
        console.log('oto jogando')
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
          <Jogador
            roubar={roubar}
            alteraRoubar={alteraRoubar}
            alteraQuemRoubar={alteraQuemRoubar}
            index={2}
            moedas={moedas[2]}
            alteraMoedas={alteraMoedas}
            moedasAltera={moedasAltera.useRef}
            nome={nomeJogadores[2]}
            idPartida={idJogadores[2]}
            position="topo"
          />
        </div>
        <div className="meio">
          <div className="esquerda">
            <Jogador
              roubar={roubar}
              alteraRoubar={alteraRoubar}
              alteraQuemRoubar={alteraQuemRoubar}
              index={1}
              moedas={moedas[1]}
              alteraMoedas={alteraMoedas}
              moedasAltera={moedasAltera.useRef}
              nome={nomeJogadores[1]}
              idPartida={idJogadores[1]}
              position="esquerda"
            />
          </div>
          <div className="centro"></div>
          <div className="direita">
            <Jogador
              roubar={roubar}
              alteraRoubar={alteraRoubar}
              alteraQuemRoubar={alteraQuemRoubar}
              index={3}
              moedas={moedas[3]}
              alteraMoedas={alteraMoedas}
              moedasAltera={moedasAltera.current}
              nome={nomeJogadores[3]}
              idPartida={idJogadores[3]}
              position="direita"
            />
          </div>
        </div>
        <div className="fim">
          <Jogador
            roubar={roubar}
            alteraRoubar={alteraRoubar}
            quemRoubar={quemRoubar}
            alteraQuemRoubar={alteraQuemRoubar}
            index={0}
            moedas={moedas[0]}
            alteraMoedas={alteraMoedas}
            moedasAltera={moedasAltera.current}
            podeJogarRef={podeJogarRef.current}
            podeJogar={podeJogar}
            nome={nomeJogadores[0]}
            idPartida={idJogadores[0]}
            position="eu"
            ordem={props.ordem}
            idSala={props.idSala}
            updatePodeJogarRef={updatePodeJogarRef}
          />
        </div>
      </div>
    </div>
  )
}

export default Partida
