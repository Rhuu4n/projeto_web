'use client'
import AnimatedButton from "@/app/components/AnimatedButton";
import LogoLink from "@/app/components/logoLink";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import { slide as Menu } from 'react-burger-menu';
import MenuBurger from "./menuBurger";



export function Header(){
    const initialized = useRef(false)
    
    const [name, setName] = useState("")


    async function resgataInfoUsuario() {
        const token = localStorage.getItem('token')
        try {
          const response = await axios.get('/api/token', {
            headers: {
              'Content-Type': 'application/json',
              token: token
            }
          })
          console.log(response)
        setName(response.data.nome) 
          
        } catch (error) {
            
        }
    }

    useEffect(() => {
    if (!initialized.current) {
        initialized.current = true
        resgataInfoUsuario()
    }
}, [])
    
    return(

        <header id="headerHome">
            <MenuBurger/>

            <nav className="menu">

                <LogoLink/>

                <div className="links">
                    <ul className="navegacao">
                        <li><Link href="http://10.60.46.49:8081/wordpress">Blog</Link> </li>
                        <li><Link href="./estatisticas">Estatisticas</Link> </li>
                        <li><Link href="#">Sobre nós</Link> </li>
                    </ul>
                </div>

                <AnimatedButton cl="btnLogin" username={name} />

                


            </nav>



           


        </header>

    );

}
export default Header;