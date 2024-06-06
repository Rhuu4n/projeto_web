"use client"



import { useEffect, useRef, useState } from "react"
import "./font.css"
import "./styleBody.css"




export default function Body () {




    return(

        <div id="container-body">

            <div className="contentBody">

                <div className="txtinicial">
                    <p>Uma plataforma de jogos para voce passar o tempo </p>
                </div>

            </div>
            <button className="btnVerjogos">Ver jogos </button>
        </div>

    )
}