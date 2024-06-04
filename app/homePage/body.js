"use client"



import { useEffect, useState } from "react"
import axios from "axios";
import "./font.css"
import "./styleBody.css"




export default function Body () {


    
    const[numeroJogadores, setNumeroJogadores] = useState([]);


    function BuscaJogadoresOnline(){
        axios.get("/api/users")
        .then(function(response){
            setNumeroJogadores(response.data.length);
        })
        .catch(function(error){
            console.error("erro")
        });


    }

    useEffect(()=>{
        BuscaJogadoresOnline();
    }, []);


    return(

        <div id="container-body">

            <div className="card">

                <div className="img-box">
                    <img src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"/>
                </div>

                <div className="content">
                    <button>Jogar agora</button>
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </div>

                
                <div className="img-box2">
                    <img src="https://c4.wallpaperflare.com/wallpaper/175/524/956/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"/>
                </div>

                <div>
                    <h2>
                    <button>Jogar agora</button>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                </div>


            </div>

        </div>

    )
}