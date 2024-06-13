"use client"

import "./cadastro.css"
import {BsCalendar, BsCardHeading,BsLock,BsPersonLock } from 'react-icons/bs'

export default function Cadastro(){
    return(

    <div id="cadastro">

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

        </div>

           
        </div>
    )
}
