"use client"

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import "./cadastro.css"
import { BsFillDoorOpenFill, BsCalendar, BsCardHeading, BsLock, BsPersonLock } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Cadastro(){
  const [token, alteraToken] = useState('');
  const [nome, alteraNome] = useState('');
  const [senha, alteraSenha] = useState('');
  const [email, alteraEmail] = useState('');
  const [nascimento, alteraNascimento] = useState('');
  const rota = useRouter();

    

    function conectaCadastro() {

      console.log(nascimento)
      if(nome.length < 3){
        toast((("Digite um nome maior para prosseguir")), {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
          });
        return
      }

      if(senha.length < 7){
        toast((("Digite uma senha maior para prosseguir")), {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
        });
        return
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{0,}$/;
      if(emailRegex.test(email) == false ){
        toast((("Digite Um Email Válido")), {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
        });
        return
      }

     
      const ano = parseInt( nascimento.split("-")[0])
      if( isNaN(ano) || ano < 1901 || ano > 2020 ){
        toast((("Digite uma data de nascimento válida")), {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark ",
        });
        return
      }

      const obj = {
          nome: nome,
          senha: senha,
          email: email,
          nascimento: nascimento
        };
    
        axios
          .post('/api/cadastro', obj, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(function (response) {
            console.log(response)
            
            if(response.status != 200){
              toast.error(("Usuário ou Senha Incorretos!"), {
                position: "top-left",
                autoClose: 1950,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark ",
                });("Algo deu errado preencha os dados corretamente")
              return;
            }

            // autenticacao usuario criado
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
            
          })
          .catch(function (error) {
            alert("Uta erradooo burro...");
            console.error('erro:' + error);
          });
    }
  
    return(
    <div className='father'>

      <ToastContainer/>

      <div id="cadastro">

        <a href= "/" > <BsFillDoorOpenFill style={{ position: "fixed" , top: "45px" , right: "45px" , color: "#777" , fontSize: "46px" , cursor: "pointer"}}/> <p style={{position: "fixed" , top: "75px" , right: "19px" , color: "#777" , fontSize: "10.9px" , cursor: "pointer"}}>Voltar Para <br/> Tela Inicíal</p> </a>


        <h1>Cadastro</h1>

        <div>
            <BsPersonLock style={{ position: "absolute", top: "23%", fontSize: "22px" , transform: "translateY(-50%)", right: "15px", color: "#777" }}/>
            <input  onChange={e => alteraNome(e.target.value)}  type="text" placeholder="Username" required="required" style={{ paddingRight:"30px" }}/>

            <BsLock style={{ position: "absolute", top: "38%", fontSize: "20px" , transform: "translateY(-50%)", right: "15px", color: "#777;"}}/>
            <input  onChange={e => alteraSenha(e.target.value)}  type="password" placeholder="Password" required="required" style={{ paddingRight:"30px" }}/>

            <BsCardHeading style={{ position: "absolute", top: "54%", fontSize: "20px" , transform: "translateY(-50%)", right: "15px", color: "#777;"}}/>
            <input  onChange={e => alteraEmail(e.target.value)}  type="email" placeholder="Email" required="required" style={{ paddingRight:"30px" }}/>

            <input  onChange={e => alteraNascimento(e.target.value)}  type="date" required="required" style={{ paddingRight: "30px"}}/>
            <BsCalendar style={{ position: "absolute", top: "70%", transform: "translateY(-50%)", right: "16px", fontSize: "18px", color: "#777" }}/>   

            <button
                onClick={()=> conectaCadastro()}
                className="btn btn-primary btn-block btn-large"
            >Cadastre-se</button>

            <p>Já Tem uma Conta ?  <a href='/autenticacao'>Faça Login </a></p>

        </div>

      </div>
    </div>
    )
}
