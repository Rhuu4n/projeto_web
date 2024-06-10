import BoxJogadores from './boxJogadores'
import './bodyLobby.css'
import { useState } from 'react'

const BodyLobby = props => {
  const [jogadores, alteraJogadores] = useState([
    'jogador1',
    'jogador2', 
    'jogador3',
    'jogador4'
  ])

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
