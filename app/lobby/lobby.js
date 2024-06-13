'use client'

import HeaderLobby from './components/headerLobby'
import BodyLobby from './components/bodyLobby'
import FooterLobby from './components/footerLobby'
import './login.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Lobby(props) {
  const [ordem, alteraOrdem] = useState(0)
  const [userInfoLoaded, setUserInfoLoaded] = useState(false)
  const [ordemUpdated, setOrdemUpdated] = useState(false)
  const initialized = useRef(false)

  function avaliaInicio() {
    if (props.criadorSala == true) {
      console.log('criador')
      alteraOrdem(1)
      setOrdemUpdated(true)
    } else {
      alteraOrdem(props.numeroJogadores)
      setOrdemUpdated(true)
      console.log(
        'm$2b$12$UUHV3tb4EwJSDcapdpu9heL2xCOzbq6oI1kv733vrqWXc3FlF48uuembro'
      )
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
      Ordem: ordem,
      Moedas: 0,
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
        props.alteraIdPartida(response.data.idPartida)
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
    <div id="login">
      <div className="container">
        <HeaderLobby idSala={props.idSala} className="container" />
        <BodyLobby
          alteraIdUsuario={props.alteraIdUsuario}
          idUsuario={props.idUsuario}
          alteraIdPartida={props.alteraIdPartida}
          idPartida={props.idPartida}
          idSala={props.idSala}
          criadorSala={props.criadorSala}
          alteraCriadorSala={props.alteraCriadorSala}
          numeroJogadores={props.numeroJogadores}
          alteraNumeroJogadores={props.alteraNumeroJogadores}
        />
        <FooterLobby />
      </div>
    </div>
  )
}
