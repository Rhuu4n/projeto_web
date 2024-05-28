'use client'

import axios from 'axios'
import { useState } from 'react'
import Botao from '../components/botao'
import './criar-salas.css'

export default function Criar_Salas(props) {
  const [idSala, alteraIdSala] = useState('')

  function alteraInput(event) {
    const value = event.target.value
    // Remove todos os caracteres que não são números
    const newValue = value.replace(/\D/g, '')
    // Limita o valor a 4 caracteres
    const limitedValue = newValue.slice(0, 4)
    // Atualiza o valor do campo
    event.target.value = limitedValue
    alteraIdSala(limitedValue)
  }

  function enviarIdSala(event) {
    event.preventDefault()
    alteraIdSala()
    alert(idSala)
  }

  function criarSalaBanco() {
    const sala = {
      jogadorAtual: 1,
      estadoSala: 1,
      numeroJogadores: 1
    }

    axios
      .post('/api/rooms', sala, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response.data.id_sala)
        props.alteraIdSala(response.data.id_sala)
      })
      .catch(function (error) {
        console.error('erro')
      })
  }

  return (
    <div className="boxPartida">
      <img src={props.link} />
      <div className="center">
        <Botao
          acao={() => {
            props.alteraSalaOrLobby('lobby'), criarSalaBanco()
          }}
          content="Criar sala"
        />
      </div>

      <form onSubmit={event => enviarIdSala(event)}>
        <div className="boxEntrar">
          <input
            type="text"
            className="txtEntrar"
            onChange={event => alteraInput(event)}
          />
          <Botao content="Entrar" />
        </div>
      </form>
    </div>
  )
}
