'use client'
import AnimatedButton from "@/app/components/AnimatedButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"



export default function Header(){

    const [user, setUser] = useState(null);

    const handleLogin = (user) => {
        //  tem q mudar para o `user` pro nome q ta na api 
        setUser(user);
    };
    
    return(

        <header id="headerHome">

            <nav className="menu">
                <div className="logoGuilty">  <img src="icon/logoH1R4.svg" alt="logotipo hira"  /> </div>

                <div className="links">
                    <ul className="navegacao">
                        <li><Link href="#">Forúm</Link> </li>
                        <li><Link href="./estatisticas">Estatisticas</Link> </li>
                        <li><Link href="#">Sobre nós</Link> </li>
                    </ul>
                </div>

                <AnimatedButton nickname={user ? user.nickname : null} />

            </nav>

        </header>
        



    );

}