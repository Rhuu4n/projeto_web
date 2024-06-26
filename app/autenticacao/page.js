'use client'

import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './style.css'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { BsFillDoorOpenFill, BsLock, BsPersonLock } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'

export default function Autenticacao() {
  const [token, alteraToken] = useState('');
  const [nome, alteraNome] = useState('');
  const [senha, alteraSenha] = useState('');
  const rota = useRouter();

  function conectaLogin() {
    const obj = {
      nome: nome,
      senha: senha
    };

    axios
      .post('/api/login', obj, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        console.log(response)
        let tok = response.data.token
        alteraToken(tok)
        localStorage.setItem('token', tok)
        rota.push('/')
      })
      
      .catch(function (error) {
        toast.error(("Usuário ou Senha Incorretos!"), {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
          });
        console.error('erro:' + error);
      });
  }

  return (
    <div className='pai'>
 
    <ToastContainer/>
    
      <div id="login">
        <a className="" href="/">
          {' '}
          <BsFillDoorOpenFill
            style={{
              position: 'fixed',
              top: '45px',
              right: '45px',
              color: '#777',
              fontSize: '46px',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          />
          <p
            style={{
              position: 'fixed',
              top: '75px',
              right: '19px',
              color: '#777',
              fontSize: '10.9px',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
          >
            Voltar Para <br /> Tela Inicíal
          </p>{' '}
        </a>

        <h1>Login</h1>

        <div>
          <BsPersonLock
            style={{
              position: 'absolute',
              top: '23%',
              fontSize: '22px',
              transform: 'translateY(-50%)',
              right: '15px',
              color: '#777'
            }}
          />
          <input
            onChange={e => alteraNome(e.target.value)}
            type="name"
            placeholder="Username"
            required="required"
            style={{ paddingRight: '30px' }}
          />

          <BsLock
            style={{
              position: 'absolute',
              top: '38%',
              fontSize: '20px',
              transform: 'translateY(-50%)',
              right: '15px',
              color: '#777'
            }}
          />
          <input
            onChange={e => alteraSenha(e.target.value)}
            type="password"
            placeholder="Password"
            required="required"
            style={{ paddingRight: '30px' }}
          />

          <button
            onClick={()=> conectaLogin()}
            type="submit"
            className="btn btn-primary btn-block btn-large"
          >
            Conecte-se
          </button>

          <p>
            Não tem uma conta? <a href='/cadastro'> Registre-se</a>
          </p>
        </div>
      </div>
    </div>
    
  )
}
