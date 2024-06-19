import React from 'react';
import './jogos.css'

const jogos = [
  { id: 1, title: "Guilty", imgUrl: "https://preview.redd.it/kxov0rcoi4p21.png?auto=webp&s=8edd6e729acc84e01d55ad0853c7d5c07d86bada", link: "/guilty" },
  { id: 2, title: "Termo", imgUrl: "https://initiate.alphacoders.com/images/135/cropped-200-200-1351040.png?9091", link: "/termo" },
  { id: 3, title: "Em breve", imgUrl: "#" },
  { id: 4, title: "Em breve", imgUrl: "#" },
  { id: 5, title: "Em breve", imgUrl: "#" },
];

const Jogos = () => (
    <div id="container-jogos">

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