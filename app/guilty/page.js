'use client'

import Header_Salas from './header-salas'
import Criar_Salas from './criar-salas'
import './salas.css'
import { useState } from 'react'
import Lobby from '../lobby/lobby'
import Partida from '../partida/partida'

export default function Jogo() {
  const [ordem, alteraOrdem] = useState(0)
  const [idSala, alteraIdSala] = useState('')
  const [idUsuario, alteraIdUsuario] = useState(0)
  const [nomeUsuario, alteraNomeUsuario] = useState(0)
  const [idPartida, alteraIdPartida] = useState()
  const [autenticacao, alteraAutenticacao] = useState('')
  const [salaOrLobby, alteraSalaOrLobby] = useState('sala')
  const [criadorSala, alteraCriadorSala] = useState(false)
  const [numeroJogadores, alteraNumeroJogadores] = useState(0)
  const [ordemJogadores, alteraOrdemJogadores] = useState([
    'jogador1',
    'jogador2',
    'jogador3',
    'jogador4'
  ])

  const [jogadoresIdPartida, alteraJogadoresIdPartida] = useState([
    'jogador1',
    'jogador2',
    'jogador3',
    'jogador4'
  ])

  function verificaPagina() {
    if (salaOrLobby == 'sala') {
      return (
        <>
          <Header_Salas
            autenticacao={autenticacao}
            alteraAutenticacao={alteraAutenticacao}
            nome="Jorge"
          />
          <Criar_Salas
            idSala={idSala}
            alteraIdSala={alteraIdSala}
            alteraSalaOrLobby={alteraSalaOrLobby}
            link="img/logo.png"
            criadorSala={criadorSala}
            alteraCriadorSala={alteraCriadorSala}
            numeroJogadores={numeroJogadores}
            alteraNumeroJogadores={alteraNumeroJogadores}
          />
        </>
      )
    } else if (salaOrLobby == 'lobby') {
      return (
        <Lobby
          alteraIdUsuario={alteraIdUsuario}
          idUsuario={idUsuario}
          nomeUsuario={nomeUsuario}
          alteraNomeUsuario={alteraNomeUsuario}
          alteraIdPartida={alteraIdPartida}
          idPartida={idPartida}
          idSala={idSala}
          criadorSala={criadorSala}
          alteraCriadorSala={alteraCriadorSala}
          numeroJogadores={numeroJogadores}
          alteraNumeroJogadores={alteraNumeroJogadores}
          alteraSalaOrLobby={alteraSalaOrLobby}
          ordemJogadores={ordemJogadores}
          alteraOrdemJogadores={alteraOrdemJogadores}
          jogadoresIdPartida={jogadoresIdPartida}
          alteraJogadoresIdPartida={alteraJogadoresIdPartida}
          ordem={ordem}
          alteraOrdem={alteraOrdem}
        />
      )
    } else {
      return (
        <Partida
          ordemJogadores={ordemJogadores}
          alteraOrdemJogadores={alteraOrdemJogadores}
          jogadoresIdPartida={jogadoresIdPartida}
          alteraJogadoresIdPartida={alteraJogadoresIdPartida}
          ordem={ordem}
          idPartida={idPartida}
          idSala={idSala}
        />
      )
    }
  }

  return <div id="salas">{verificaPagina()}</div>
}
