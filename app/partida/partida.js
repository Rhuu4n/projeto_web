import { useEffect } from 'react'
import HeaderPartida from './headerPartida'
import Jogador from './jogador'
import './partida.css'

const Partida = props => { 
  useEffect(() => {
    console.log(props.ordemJogadores)
  }, [])

  return (
    <div id="partida">
      <HeaderPartida />
      <div className="areaPartida">
        <div className="topo">
          <Jogador />
        </div>
        <div className="meio">
          <div className="esquerda">
            <Jogador position="esquerda" />
          </div>
          <div className="centro"></div>
          <div className="direita">
            <Jogador position="direita" />
          </div>
        </div>
        <div className="fim">
          <Jogador />
        </div>
      </div>
    </div>
  )
}

export default Partida
