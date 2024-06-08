"use client"



import { useEffect, useRef, useState } from "react"
import "./font.css"
import "./styleBody.css"




export default function Body () {

    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursor = cursorRef.current;
            if (cursor) {
                cursor.style.top = e.pageY + "px";
                cursor.style.left = e.pageX + "px";
            }
        };

        document.addEventListener("mousemove", handleMouseMove);

        
        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);





    return(

        <div id="container-body">

            <div ref={cursorRef} className="cursor"></div>

            <div className="contentBody">

                <div className="txtinicial">
                    <p> Uma plataforma de jogos para voce passar o tempo. =] </p>
                </div>

            </div>
            <button className="btnVerjogos">Ver jogos </button>
            
        </div>

    )
}