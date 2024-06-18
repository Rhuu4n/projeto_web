"use client"
import ReactDOM from 'react-dom'
import axios from 'axios'
import "./style.css"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import {BsLock, BsPersonLock } from 'react-icons/bs'

export default function Autenticacao(){
    const [token, alteraToken] = useState("");
    const [nome, alteraNome] = useState();
    const [senha, alteraSenha] = useState();
    const rota = useRouter()


function conectaLogin(){
        const obj = {
            "nome" : nome,
            "senha" : senha
        }

        axios.post('/api/login', obj, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {
            console.log(response)
            alteraToken(response.data.token)
            verificaUser();
        })
        .catch(function (error) {
          console.error('erro:' + error)
        })

    }

    function verificaUser() {
        if (token != "") {
            localStorage.setItem("token",token)
            rota.push("/cadastro")
    }
    }

return(
    <div id="login">


    <h1>Login</h1>

        <div>
            <BsPersonLock style={{ position: "absolute", top: "23%", fontSize: "22px" , transform: "translateY(-50%)", right: "15px", color: "#777" }}/>
            <input onChange={(e) => alteraNome(e.target.value)} type="name" placeholder="Username" required="required" style={{ paddingRight:"30px" }}/>

            <BsLock style={{ position: "absolute", top: "38%", fontSize: "20px" , transform: "translateY(-50%)", right: "15px", color: "#777"}}/>
            <input onChange={(e) => alteraSenha(e.target.value)} type="password" placeholder="Password" required="required" style={{ paddingRight:"30px" }}/>

            <button onClick={conectaLogin} type="submit" className="btn btn-primary btn-block btn-large">Conecte-se</button>

            <p>Não Tem Conta Ainda ? <a href='/cadastro'>Crie Agora</a></p>

        </div>

    </div>
 
    )
} 