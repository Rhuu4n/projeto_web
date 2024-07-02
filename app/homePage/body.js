"use client"


import Link from "next/link";
import { useEffect, useRef, useState } from "react"
import "./body.css"
import AnimatedCursor from "../components/cursorAnimado";

export default function Body () {

    return(

        <div id="container-body">

            <AnimatedCursor/>

            <div className="contentBody">

                <div className="txtinicial">
                    <p> Uma plataforma de jogos para voce passar o tempo. =] </p>
                </div>

                <div className="txtinicialMobile">
                    <p> Uma plataforma de jogos <br/>para voce passar o tempo. =] </p>

                </div>

            </div>

            <Link href="./jogos"> <button className="btnVerjogos"> Ver jogos </button> </Link>

        </div>

    )
}