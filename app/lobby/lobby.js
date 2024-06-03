'use client'

import HeaderLobby from './components/headerLobby'
import BodyLobby from './components/bodyLobby'
import FooterLobby from './components/footerLobby'
import './login.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function Lobby(props) {
  const [ordem, alteraOrdem] = useState(0)
  const initialized = useRef(false)

  function avaliaInicio() {
    cadastraPartida()
    console.log('Partida cadastrada')
    if (props.criadorSala == true) {
      console.log('criador')
      alteraOrdem(1)
    } else {
      alteraOrdem(props.numeroJogadores)
      console.log('membro')
      console.log(props.numeroJogadores)
      atualizaSala()
    }
  }

  async function cadastraPartida() {
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
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response.data)
        props.alteraIdPartida(response.data.idPartida)
      })
      .catch(function (error) {
        console.error('erro:' + error)
      })
  }

  async function atualizaSala() {
    try {
      const response = await axios.put(`/api/rooms/${props.idSala}`, {
        numeroJogadores: props.numeroJogadores
      })
      console.log(response.data)
      alert('Número de jogadores atualizado com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar o número de jogadores:', error)
      if (error.response) {
        console.error('Resposta do servidor:', error.response.data)
      }
    }
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      avaliaInicio()
    }
  }, [])

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
