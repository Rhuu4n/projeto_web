

export default function Header(){
    return(
        <header id="headerHome">

            <nav className="menu">
                <div className="logoGuilty"> <img src="icon/logoH1R4.svg" /></div>

                <div className="links">
                    <ul className="navegacao">
                        <li><a href="#">Novidades</a> </li>
                        <li><a href="#">Suporte</a> </li>
                        <li><a href="#">Sobre nós</a> </li>
                    </ul>
                </div>

                <button className="btnLogin">Log In</button>

            </nav>



        </header>
        



    );

}