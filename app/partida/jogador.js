'use client'

import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './jogador.css'
import axios from 'axios'

const Jogador = props => {
  const [carta1, alteraCarta1] = useState('carta.png')
  const [carta2, alteraCarta2] = useState('carta.png')
  const [acao1, alteraAcao1] = useState(0)
  const [acao2, alteraAcao2] = useState(0)

  const showToastMessage = () => {
    toast.success('Sua vez!')
  }

  async function acao(param) {
    if (props.position == 'eu') {
      if (props.podeJogarRef === false) {
        toast.warning('N e sua vez!')
      } else {
        if (param == 1) {
          const token = localStorage.getItem('token')
          try {
            const response = await axios.put(
              `/api/matches/${props.idPartida}`,
              {
                Moedas: 2,
                Afetado: 0
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  token: token
                }
              }
            )

            console.log(props.ordem)

            const response_room = await axios.put(
              `/api/rooms/${props.idSala}`,
              {
                jogadorAtual: props.ordem == 4 ? 1 : props.ordem + 1
              },
              {
                headers: {
                  'Content-Type': 'application/json',
                  token: token
                }
              }
            )

            console.log(response.data)
            console.log(response_room.data)
            props.updatePodeJogarRef(false)
          } catch (error) {
            console.log('erro: ' + error)
            if (error.response && error.response.status === 404) {
              alert('Partida nao encontrada')
            } else if (error.response && error.response.status === 401) {
              console.error('erro:' + error)
              router.push('/autenticacao')
            } else {
              alert('Erro ao atualizar a partida')
            }
          }
        }
      }
    }
  }

  useEffect(() => {
    if (props.podeJogarRef === true) {
      let num1 = Math.floor(Math.random() * 2) + 1
      let num2 = Math.floor(Math.random() * 2) + 1

      if (num1 === 1) {
        alteraAcao1(1)
        alteraCarta1('mineradora.jpg')
      } else if (num1 === 2) {
        alteraAcao1(2)
        alteraCarta1('saqueador.jpg')
      } else {
        alert('1 outro numero' + num1)
      }

      if (num2 === 1) {
        alteraAcao2(1)
        alteraCarta2('mineradora.jpg')
      } else if (num2 === 2) {
        alteraAcao2(2)
        alteraCarta2('saqueador.jpg')
      } else {
        alert('2 outro numero' + num2)
      }

      showToastMessage()
    }
  }, [props.podeJogarRef])

  return (
    <div id="joguin" className={props.position}>
      <div className="box-infos">
        <p>{props.nome}</p>
        <div className="box-moedas">
          <p className="moedas">0x</p>
          <img src="img/moedas.png" />
        </div>
      </div>
      <div className="box-cartas">
        <img onClick={() => acao(acao1)} src={'img/' + carta1} />
        <img onClick={() => acao(acao2)} src={'img/' + carta2} />
      </div>
    </div>
  )
}

export default Jogador
