'use client'

import axios from 'axios'
import { useState } from 'react'
import Botao from '../components/botao'
import './criar-salas.css'
import { useRouter } from 'next/navigation'

export default function Criar_Salas(props) {
  const router = useRouter()
  function alteraInput(event) {
    const value = event.target.value
    // Remove todos os caracteres que não são números
    const newValue = value.replace(/\D/g, '')
    // Limita o valor a 4 caracteres
    const limitedValue = newValue.slice(0, 4)
    // Atualiza o valor do campo
    event.target.value = limitedValue
    props.alteraIdSala(limitedValue)
  }

  async function entrarSala(event) {
    const token = localStorage.getItem('token')
    event.preventDefault()
    try {
      const response = await axios.get(`/api/rooms/${props.idSala}`, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })

      const estadoSala = response.data.estadoSala
      const numeroJogadores = response.data.numeroJogadores

      if (estadoSala == 2) {
        alert('a partida ja foi iniciada')
      } else {
        if (numeroJogadores < 4) {
          props.alteraNumeroJogadores(numeroJogadores + 1)
          props.alteraSalaOrLobby('lobby')
        } else {
          alert('Sala cheia')
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
        alert('Erro ao verificar a sala')
      }
    }
  }

  function criarSalaBanco() {
    const token = localStorage.getItem('token')

    const sala = {
      jogadorAtual: 1,
      estadoSala: 1,
      numeroJogadores: 1
    }

    if (!token) {
      console.error(
        'Token não encontrado. Redirecionando para a página de login...'
      )
      router.push('/autenticacao')
      return
    }

    axios
      .post('/api/rooms', sala, {
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })
      .then(function (response) {
        console.log('tentou')
        props.alteraIdSala(response.data.id_sala)
        props.alteraCriadorSala(true)
        props.alteraNumeroJogadores(1)
        props.alteraSalaOrLobby('lobby')
      })
      .catch(function (error) {
        if (error.response && error.response.status === 401) {
          // Lógica específica para o erro 401
          console.error(
            'Erro 401: Usuário não autenticado. Redirecionando para a página de login...'
          )
          router.push('/autenticacao')
        } else {
          console.error('Erro:' + error)
        }
      })
  }

  return (
    <div className="boxPartida">
      <img className="logo" src={props.link} />
      <div className="center">
        <Botao acao={() => criarSalaBanco()} content="Criar sala" />
      </div>

      <form onSubmit={event => entrarSala(event)}>
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
