'use client'

import HeaderLobby from './components/headerLobby'
import BodyLobby from './components/bodyLobby'
import FooterLobby from './components/footerLobby'
import './lobby.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Lobby(props) {
  const [cheia, alteraCheia] = useState(false)
  const [sair, alteraSair] = useState(false)
  const [liberado, alteraLiberado] = useState(false)
  const [userInfoLoaded, setUserInfoLoaded] = useState(false)
  const [ordemUpdated, setOrdemUpdated] = useState(false)
  const sairRef = useRef(false)
  const initialized = useRef(false)

  async function sairSala() {
    console.log('sair da sala')
    console.log(props.idPartida)

    const token = localStorage.getItem('token')

    try {
      if (props.numeroJogadores == 1) {
        const response = await axios.delete(`/api/rooms/${props.idSala}`, {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        })
        console.log(response.data)
      } else {
        const response = await axios.put(
          `/api/rooms/${props.idSala}`,
          {
            numeroJogadores: props.numeroJogadores - 1
          },
          {
            headers: {
              'Content-Type': 'application/json',
              token: token
            }
          }
        )
        console.log(response.data)
      }

      const response_delete = await axios.delete(
        `/api/matches/${props.idPartida}`,
        {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        }
      )
      console.log(response_delete.data)

      props.alteraSalaOrLobby('sala')

    } catch (error) {
      console.log(error.response.data)
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

  function avaliaInicio() {
    if (props.criadorSala == true) {
      console.log('criador')
      props.alteraOrdem(1)
      setOrdemUpdated(true)
    } else {
      props.alteraOrdem(props.numeroJogadores)
      setOrdemUpdated(true)
      console.log(props.numeroJogadores)
      atualizaSala()
    }
  }

  async function cadastraPartida() {
    console.log('p')
    const token = localStorage.getItem('token')
    const partida = {
      Jogador_ID: props.idUsuario,
      id_sala: props.idSala,
      Ordem: props.ordem,
      Moedas: 2,
      Carta_1: 1,
      Carta_2: 1,
      Acao: null,
      Afetado: null
    }

    await axios
      .post('/api/matches', partida, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })
      .then(function (response) {
        console.log(response.data)
        props.alteraIdPartida(response.data.id_partida)
      })
      .catch(function (error) {
        console.log('erro: ' + error)
        if (error.response && error.response.status === 404) {
          alert('Sala nao encontrada')
        } else if (error.response && error.response.status === 401) {
          console.error('erro:' + error)
          router.push('/autenticacao')
        } else {
          alert('Erro ao entrar no lobby')
        }
      })
  }

  async function atualizaSala() {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.put(
        `/api/rooms/${props.idSala}`,
        {
          numeroJogadores: props.numeroJogadores
        },
        {
          headers: {
            'Content-Type': 'application/json',
            token: token
          }
        }
      )
      console.log(response.data)
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

  async function resgataInfoUsuario() {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get('/api/token', {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })
      console.log(response)
      props.alteraIdUsuario(response.data.id)
      props.alteraNomeUsuario(response.data.nome)
      setUserInfoLoaded(true)
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
    if (sair === true) {
      console.log(`acionou sair`)
      sairRef.current = true
    }
  }, [sair])

  useEffect(() => {
    if (liberado === true) {
      console.log(`acionou liberado`)
      sairRef.current = false
      sairSala()
    }
  }, [liberado])

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      resgataInfoUsuario()
    }
  }, [])

  useEffect(() => {
    if (userInfoLoaded) {
      avaliaInicio()
    }
  }, [userInfoLoaded])

  useEffect(() => {
    if (ordemUpdated) {
      cadastraPartida()
    }
  }, [ordemUpdated])

  return (
    <div id="lobby">
      <div className="container">
        <HeaderLobby
          alteraSair={alteraSair}
          idSala={props.idSala}
          className="container"
        />
        <BodyLobby
          alteraLiberado={alteraLiberado}
          ordemJogadores={props.ordemJogadores}
          ordem={props.ordem}
          alteraOrdemJogadores={props.alteraOrdemJogadores}
          cheia={cheia}
          alteraCheia={alteraCheia}
          alteraIdUsuario={props.alteraIdUsuario}
          idUsuario={props.idUsuario}
          alteraIdPartida={props.alteraIdPartida}
          idPartida={props.idPartida}
          idSala={props.idSala}
          criadorSala={props.criadorSala}
          alteraCriadorSala={props.alteraCriadorSala}
          numeroJogadores={props.numeroJogadores}
          alteraNumeroJogadores={props.alteraNumeroJogadores}
          alteraSalaOrLobby={props.alteraSalaOrLobby}
          jogadoresIdPartida={props.jogadoresIdPartida}
          alteraJogadoresIdPartida={props.alteraJogadoresIdPartida}
          sairRef={sairRef.current}
        />
        {props.criadorSala ? (
          <FooterLobby cheia={cheia} idSala={props.idSala} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
