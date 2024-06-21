'use client'
import AnimatedButton from "@/app/components/AnimatedButton";
import axios from "axios";
import Link from "next/link";
import { useEffect, useRef, useState } from "react"



export default function Header(){
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

                <div className="logoGuilty">  <img src="icon/logoH1R4.svg" alt="logotipo hira"  /> </div>

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