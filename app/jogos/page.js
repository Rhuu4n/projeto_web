'use client'

import React from 'react';
import './jogos.css';
import '../homePage/components/header.css';
import '../components/AnimatedButton.css';
import AnimatedCursor from '../components/cursorAnimado';
import AnimatedButton from '../components/AnimatedButton';
import LogoLink from '../components/logoLink';
import Header from '../homePage/components/header';
import Footer from '../homePage/components/footer';



const jogos = [
  { id: 1, title: "Guilty", imgUrl: "https://i.imgur.com/AkpUYn8.png", link: "/guilty" },
  { id: 2, title: "Termo", imgUrl: "https://i.imgur.com/yVpzSdX.png", link: "/termo" },
  { id: 3, title: "Em breve", imgUrl: "https://i.imgur.com/x5TKkcU.png" },
  { id: 4, title: "Em breve", imgUrl: "https://i.imgur.com/x5TKkcU.png" },
  { id: 5, title: "Em breve", imgUrl: "https://i.imgur.com/x5TKkcU.png" },
];

const Jogos = () => (
    <div id="container-jogos">

        <AnimatedCursor/>

        <Header/>

        <div className="jogos-grid">
            

            {jogos.map((jogo) => (

            <div key={jogo.id} className="jogos">

                    <a href={jogo.link ? jogo.link : '#'} >

                        <img src={jogo.imgUrl} alt={jogo.title} className="jogo-img" />
                        <h3>{jogo.title}</h3>

                    </a>

            </div>

          

            ))}

        </div>

        <Footer/>

    </div>
);


export default Jogos;