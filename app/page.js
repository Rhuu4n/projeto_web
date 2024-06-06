import Body from './homePage/body'
import Footer from './homePage/components/footer'
import Header from './homePage/components/header'
import './homePage/components/style.css'
import './homePage/components/header.css'

// importando biblioteca swiper

export default function Home() {
  return (
    <div>
      <div id="homePage">
        <Header />

        <Body />

        <Footer />
      </div>
    </div>
  )
}
