"use client"

import "./cadastro.css"
import { BsFillDoorOpenFill, BsCalendar, BsCardHeading, BsLock, BsPersonLock } from 'react-icons/bs'

export default function Cadastro(){
    return(

    <div id="cadastro">

        <a href= "/" > <BsFillDoorOpenFill style={{ position: "fixed" , top: "45px" , right: "45px" , color: "#777" , fontSize: "46px" , cursor: "pointer"}}/> <p style={{position: "fixed" , top: "75px" , right: "19px" , color: "#777" , fontSize: "10.9px" , cursor: "pointer"}}>Voltar Para <br/> Tela Inicíal</p> </a>


        <h1>Cadastro</h1>

        <div>
            <BsPersonLock style={{ position: "absolute", top: "23%", fontSize: "22px" , transform: "translateY(-50%)", right: "15px", color: "#777" }}/>
            <input type="text" placeholder="Username" required="required" style={{ paddingRight:"30px" }}/>

            <BsLock style={{ position: "absolute", top: "38%", fontSize: "20px" , transform: "translateY(-50%)", right: "15px", color: "#777;"}}/>
            <input type="password" placeholder="Password" required="required" style={{ paddingRight:"30px" }}/>

            <BsCardHeading style={{ position: "absolute", top: "54%", fontSize: "20px" , transform: "translateY(-50%)", right: "15px", color: "#777;"}}/>
            <input type="email" placeholder="Email" required="required" style={{ paddingRight:"30px" }}/>

            <input type="date" required="required" style={{ paddingRight: "30px"}}/>
            <BsCalendar style={{ position: "absolute", top: "70%", transform: "translateY(-50%)", right: "16px", fontSize: "18px", color: "#777" }}/>   

            <button type="submit" class="btn btn-primary btn-block btn-large">Cadastre-se</button> 

            <p>Já Tem uma Conta ?  <a href='/autenticacao'>Faça Login </a></p>

        </div>

        </div>
    )
}
