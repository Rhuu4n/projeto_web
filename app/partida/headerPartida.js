import Botao from '../components/botao'
import { useRouter } from 'next/navigation'
import './headerPartida.css'

const HeaderPartida = () => {
  const router = useRouter()

  function sair() {
    console.log(`oto saindo`)
    router.push('/')
  }

  return (
    <header id="header-p">
      <Botao acao={() => sair()} content="Sair" />
    </header>
  )
}

export default HeaderPartida
