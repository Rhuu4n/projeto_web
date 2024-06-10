"use client"
import ReactDOM from 'react-dom'
import axios from 'axios'


import "./style.css"
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

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
           // localStorage.getItem("token")
            rota.push("/download")
    }
    }

return(
    
    <div id="login">

        <h1>Login</h1>
        <input onChange={(e)=>alteraNome(e.target.value) } name="u" placeholder="Username" required="required" />
        <input onChange={(e)=>alteraSenha(e.target.value)} type="password" name="p" placeholder="Password" required="required" />
        <button onClick={conectaLogin} type="submit" className="btn btn-primary btn-block btn-large">Conecte-se</button>

    </div>
 
    )
}