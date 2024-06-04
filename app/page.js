import Body from './homePage/body'
import Footer from './homePage/footer'
import Header from './homePage/header'
import './homePage/style.css'

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
