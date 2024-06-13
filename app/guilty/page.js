'use client'

import Header_Salas from './header-salas'
import Criar_Salas from './criar-salas'
import './salas.css'
import { useState } from 'react'
import Lobby from '../lobby/lobby'

export default function Jogo() {
  const [idSala, alteraIdSala] = useState('')
  const [idUsuario, alteraIdUsuario] = useState(0)
  const [nomeUsuario, alteraNomeUsuario] = useState(0)
  const [idPartida, alteraIdPartida] = useState()
  const [autenticacao, alteraAutenticacao] = useState('')
  const [salaOrLobby, alteraSalaOrLobby] = useState('sala')
  const [criadorSala, alteraCriadorSala] = useState(false)
  const [numeroJogadores, alteraNumeroJogadores] = useState(0)

  return (
    <div id="salas">
      {salaOrLobby == 'sala' ? (
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
      ) : (
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
        />
      )}
    </div>
  )
}
