import { useEffect, useState } from 'react'
import './jogador.css'

const Jogador = props => {
  const [carta1, alteraCarta1] = useState('carta.png')
  const [carta2, alteraCarta2] = useState('carta.png')
  const [acao1, alteraAcao1] = useState(0)
  const [acao2, alteraAcao2] = useState(0)

  useEffect(() => {}, [props.podeJogar])

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
        <img onclick={() => {}} src={"img/" + carta1} />
        <img onclick={() => {}} src={"img/" + carta2} />
      </div>
    </div>
  )
}

export default Jogador
