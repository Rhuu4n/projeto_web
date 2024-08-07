import BoxJogadores from './boxJogadores'
import './bodyLobby.css'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const BodyLobby = props => {
  const router = useRouter()
  const [attribute, setAttribute] = useState(false)
  const [jogadores, alteraJogadores] = useState([
    'jogador1',
    'jogador2',
    'jogador3',
    'jogador4'
  ])
  const initialized = useRef(false)
  const parar = useRef(false)

  function main() {
    const interval = setInterval(async () => {
      if (parar.current === true) {
        clearInterval(interval)

        console.log('chamei aqui')
        props.alteraLiberado(true)
      }

      const token = localStorage.getItem('token')
      try {
        const response = await axios.get(
          `/api/matches/room?room=${props.idSala}`,
          {
            headers: {
              'Content-Type': 'application/json',
              token: token
            }
          }
        )

        const response_room = await axios.get(`/api/rooms/${props.idSala}`, {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        })

        let jogadoresNovo = ['jogador1', 'jogador2', 'jogador3', 'jogador4']

        let jogadoresLobby = ['jogador1', 'jogador2', 'jogador3', 'jogador4']

        let controleJogador = 0
        for (let res of response.data) {
          let nome = await pegaUser(res.Jogador_ID)
          jogadoresNovo[controleJogador] = nome
          jogadoresLobby[controleJogador] = nome
          controleJogador++
        }

        let idJogadores = ['jogador1', 'jogador2', 'jogador3', 'jogador4']

        let jogador1 =
          response.data[0] == undefined
            ? 'jogador'
            : await pegaUser(response.data[0].Jogador_ID)
        let jogador2 =
          response.data[1] == undefined
            ? 'jogador'
            : await pegaUser(response.data[1].Jogador_ID)
        let jogador3 =
          response.data[2] == undefined
            ? 'jogador'
            : await pegaUser(response.data[2].Jogador_ID)
        let jogador4 =
          response.data[3] == undefined
            ? 'jogador'
            : await pegaUser(response.data[3].Jogador_ID)

        let id1 =
          response.data[0] == undefined
            ? 'jogador'
            : response.data[0].id_partida
        let id2 =
          response.data[1] == undefined
            ? 'jogador'
            : response.data[1].id_partida
        let id3 =
          response.data[2] == undefined
            ? 'jogador'
            : response.data[2].id_partida
        let id4 =
          response.data[3] == undefined
            ? 'jogador'
            : response.data[3].id_partida

        if (props.numeroJogadores == 1) {
          jogadoresNovo[0] = jogador1 == undefined ? 'jogador' : jogador1
          jogadoresNovo[1] = jogador2 == undefined ? 'jogador' : jogador2
          jogadoresNovo[2] = jogador3 == undefined ? 'jogador' : jogador3
          jogadoresNovo[3] = jogador4 == undefined ? 'jogador' : jogador4

          idJogadores[0] = id1 == undefined ? 'jogador' : id1
          idJogadores[1] = id2 == undefined ? 'jogador' : id2
          idJogadores[2] = id3 == undefined ? 'jogador' : id3
          idJogadores[3] = id4 == undefined ? 'jogador' : id4
        } else if (props.numeroJogadores == 2) {
          jogadoresNovo[0] = jogador2 == undefined ? 'jogador' : jogador2
          jogadoresNovo[1] = jogador3 == undefined ? 'jogador' : jogador3
          jogadoresNovo[2] = jogador4 == undefined ? 'jogador' : jogador4
          jogadoresNovo[3] = jogador1 == undefined ? 'jogador' : jogador1

          idJogadores[0] = id2 == undefined ? 'jogador' : id2
          idJogadores[1] = id3 == undefined ? 'jogador' : id3
          idJogadores[2] = id4 == undefined ? 'jogador' : id4
          idJogadores[3] = id1 == undefined ? 'jogador' : id1
        } else if (props.numeroJogadores == 3) {
          jogadoresNovo[0] = jogador3 == undefined ? 'jogador' : jogador3
          jogadoresNovo[1] = jogador4 == undefined ? 'jogador' : jogador4
          jogadoresNovo[2] = jogador1 == undefined ? 'jogador' : jogador1
          jogadoresNovo[3] = jogador2 == undefined ? 'jogador' : jogador2

          idJogadores[0] = id3 == undefined ? 'jogador' : id3
          idJogadores[1] = id4 == undefined ? 'jogador' : id4
          idJogadores[2] = id1 == undefined ? 'jogador' : id1
          idJogadores[3] = id2 == undefined ? 'jogador' : id2
        } else if (props.numeroJogadores == 4) {
          jogadoresNovo[0] = jogador4 == undefined ? 'jogador' : jogador4
          jogadoresNovo[1] = jogador1 == undefined ? 'jogador' : jogador1
          jogadoresNovo[2] = jogador2 == undefined ? 'jogador' : jogador2
          jogadoresNovo[3] = jogador3 == undefined ? 'jogador' : jogador3

          idJogadores[0] = id4 == undefined ? 'jogador' : id4
          idJogadores[1] = id1 == undefined ? 'jogador' : id1
          idJogadores[2] = id2 == undefined ? 'jogador' : id2
          idJogadores[3] = id3 == undefined ? 'jogador' : id3
        }

        props.alteraOrdemJogadores(jogadoresNovo)
        props.alteraJogadoresIdPartida(idJogadores)
        alteraJogadores(jogadoresLobby)

        if (controleJogador >= 4) {
          props.alteraCheia(true)
        }

        if (response_room.data.estadoSala == 2) {
          clearInterval(interval)
          props.alteraSalaOrLobby('partida')
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
    }, 800) // Executa a rotina a cada segundo
  }

  async function pegaUser(id) {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get(`/api/users/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })
      return response.data.nome
    } catch (error) {
      console.log('erro: ' + error)
      if (error.response && error.response.status === 404) {
        alert('Sala nao encontrada')
      } else if (error.response && error.response.status === 401) {
        console.error('erro:' + error)
        router.push('/autenticacao')
      } else {
        alert('Erro ao atualizar a sala')
      }
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true

      main()
      // Limpeza do intervalo quando o componente for desmontado
    }
  }, [])

  useEffect(() => {}, [jogadores])

  useEffect(() => {
    if (props.sairRef === true) {
      console.log(`acionou bodylobby`)
      parar.current = true
    }
  }, [props.sairRef])

  return (
    <main id="bodylobby">
      <BoxJogadores
        jogador1={jogadores[0]}
        jogador2={jogadores[1]}
        jogador3={jogadores[2]}
        jogador4={jogadores[3]}
      />
    </main>
  )
}

export default BodyLobby
