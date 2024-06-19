'use client'
import React from 'react';
import './jogos.css'
import AnimatedCursor from '../components/cursorAnimado'
import { useEffect, useRef, useState } from "react";

const jogos = [
  { id: 1, title: "Guilty", imgUrl: "https://preview.redd.it/kxov0rcoi4p21.png?auto=webp&s=8edd6e729acc84e01d55ad0853c7d5c07d86bada", link: "/guilty" },
  { id: 2, title: "Termo", imgUrl: "https://c4.wallpaperflare.com/wallpaper/236/687/679/digital-digital-art-illustration-artwork-drawing-hd-wallpaper-preview.jpg", link: "/termo" },
  { id: 3, title: "Em breve", imgUrl: "https://c4.wallpaperflare.com/wallpaper/236/687/679/digital-digital-art-illustration-artwork-drawing-hd-wallpaper-preview.jpg" },
  { id: 4, title: "Em breve", imgUrl: "https://c4.wallpaperflare.com/wallpaper/236/687/679/digital-digital-art-illustration-artwork-drawing-hd-wallpaper-preview.jpg" },
  { id: 5, title: "Em breve", imgUrl: "https://c4.wallpaperflare.com/wallpaper/236/687/679/digital-digital-art-illustration-artwork-drawing-hd-wallpaper-preview.jpg" },
];

const Jogos = () => (
    <div id="container-jogos">
        <AnimatedCursor/>

        <h1>Jogos</h1>

        <div className="jogos-grid">

            {jogos.map((jogo) => (

        <div key={jogo.id} className="jogos">

                <a href={jogo.link ? jogo.link : '#'} target={jogo.link ? '_blank' : '_self'}>

                    <img src={jogo.imgUrl} alt={jogo.title} className="jogo-img" />
                    <h3>{jogo.title}</h3>

                </a>

        </div>

        ))}

        </div>

    </div>
);


export default Jogos;