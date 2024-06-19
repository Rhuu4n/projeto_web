import Link from "next/link";


export default function Header(){
    return(
        <header id="headerHome">

            <nav className="menu">
                <div className="logoGuilty"> <img src="icon/logoH1R4.svg" /></div>

                <div className="links">
                    <ul className="navegacao">
                        <li><Link href="#">Forúm</Link> </li>
                        <li><Link href="./estatisticas">Estatisticas</Link> </li>
                        <li><Link href="#">Sobre nós</Link> </li>
                    </ul>
                </div>

                <Link href="./autenticacao"> <button className="btnLogin">Log In</button> </Link>

            </nav>



        </header>
        



    );

}