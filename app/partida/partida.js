import { useEffect, useRef, useState } from 'react'
import HeaderPartida from './headerPartida'
import Jogador from './jogador'
import './partida.css'
import axios from 'axios'
import { toast } from 'react-toastify'
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
    const token = localStorage.getItem('token')
    try {
      console.log(props.idSala)
      const response = await axios.get(
        `/api/matches/room?room=${props.idSala}`,
        {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        }
      )

      console.log(response.data)

      let moeda1 = response.data[0] == undefined ? '0' : response.data[0].Moedas
      let moeda2 = response.data[1] == undefined ? '0' : response.data[1].Moedas
      let moeda3 = response.data[2] == undefined ? '0' : response.data[2].Moedas
      let moeda4 = response.data[3] == undefined ? '0' : response.data[3].Moedas

      let moedas_new = [2, 2, 2, 2]

      if (props.ordem == 1) {
        moedas_new[0] = moeda1
        moedas_new[1] = moeda2
        moedas_new[2] = moeda3
        moedas_new[3] = moeda4
      } else if (props.ordem == 2) {
        moedas_new[0] = moeda2
        moedas_new[1] = moeda3
        moedas_new[2] = moeda4
        moedas_new[3] = moeda1
      } else if (props.ordem == 3) {
        moedas_new[0] = moeda3
        moedas_new[1] = moeda4
        moedas_new[2] = moeda1
        moedas_new[3] = moeda2
      } else if (props.ordem == 4) {
        moedas_new[0] = moeda4
        moedas_new[1] = moeda1
        moedas_new[2] = moeda2
        moedas_new[3] = moeda3
      }

      alteraMoedas(moedas_new)

      for (let i = 0; i < moedas_new.length; i++) {
        if (moedas_new[i] >= 15) {
          toast.warning(
            `O ${props.ordemJogadores[i]} juntou 15 moedas e venceu a partida!`
          )
          setTimeout(() => {
            props.alteraSalaOrLobby('sala')
          }, 5500)
        }
      }
    } catch (error) {
      console.log('erro: ' + error)
      if (error.response && error.response.status === 404) {
        alert('Sala nao encontrada')
      } else if (error.response && error.response.status === 401) {
        console.error('erro:' + error)
        router.push('/autenticacao')
      } else {
        alert('Erro ao resgatar dados da partida')
      }
    }
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
            idJogadores={idJogadores}
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
