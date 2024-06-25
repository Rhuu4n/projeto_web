'use client'
import AnimatedButton from "@/app/components/AnimatedButton";
import LogoLink from "@/app/components/logoLink";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"



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

            <nav className="menu">

                <LogoLink/>

                <div className="links">
                    <ul className="navegacao">
                        <li><Link href="#">Forúm</Link> </li>
                        <li><Link href="./estatisticas">Estatisticas</Link> </li>
                        <li><Link href="#">Sobre nós</Link> </li>
                    </ul>
                </div>

                <AnimatedButton username={name} />

            </nav>

        </header>

    );

}
export default Header;