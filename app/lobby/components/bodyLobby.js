import BoxJogadores from './boxJogadores'
import './bodyLobby.css'
import { useState, useRef, useEffect } from 'react'
import axios from 'axios'

const BodyLobby = props => {
  const [attribute, setAttribute] = useState(false)
  const [jogadores, alteraJogadores] = useState([
    'jogador1',
    'jogador2',
    'jogador3',
    'jogador4'
  ])
  const initialized = useRef(false)

  function main() {
    const interval = setInterval(async () => {
      const token = localStorage.getItem('token')

      console.log('oi')
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

        let jogadoresNovo = ['jogador1', 'jogador2', 'jogador3', 'jogador4']
        let controleJogador = 1
        for (let res of response.data) {
          let nome = await pegaUser(res.Jogador_ID)
          console.log(`jogador ${controleJogador}: ${nome}`)
          jogadoresNovo[controleJogador - 1] = nome
          controleJogador++
        }

        alteraJogadores(jogadoresNovo)

        console.log(response.data)
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

      // Aqui você pode executar sua rotina
      console.log('Rotina executada')

      // Simulação de atualização do atributo
      // No seu caso, você pode fazer uma chamada API ou outra lógica
      const newValue = false
      setAttribute(newValue)

      if (attribute) {
        clearInterval(interval) // Para a rotina se o atributo mudar
        console.log('Atributo mudou, rotina parada')
      }
    }, 1500) // Executa a rotina a cada segundo
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

      return () => setAttribute(true) // Limpeza do intervalo quando o componente for desmontado
    }
  }, [])

  useEffect(() => {
    console.log('array mudou')
  }, [jogadores])

  const checkAttribute = () => {
    // Lógica para verificar o atributo
    // Por exemplo, fazer uma chamada API ou checar uma condição
    // Vamos simular que após 5 segundos, o atributo muda para verdadeiro
    const randomValue = Math.random() > 0.8 // Simulação de mudança de atributo
    return randomValue
  }

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
