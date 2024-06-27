import Botao from '../components/botao'
import './header-salas.css'
import { useRouter } from 'next/navigation'

export default function Header_Salas(props) {
  const router = useRouter()

  return (
    <div id="headerSalas">
      <div className="boxUser">
        <Botao
          acao={() => {
            router.push(`/jogos`)
          }}
          content="Voltar"
        />
      </div>

      <p className="lblLogo">Guilty</p>
    </div>
  )
}
