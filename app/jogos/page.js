"use client"


import "./jogos.css"


const jogos = [
    { id: 1, title: "Guilty", imgUrl: "https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 2, title: "Termo", imgUrl: "https://images.pexels.com/photos/2902536/pexels-photo-2902536.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { id: 3, title: "Em breve", imgUrl: "#" },
    { id: 4, title: "Em breve", imgUrl: "#" },
    { id: 5, title: "Em breve", imgUrl: "#" },
  ];


export default function Jogos(){
    return(
        <div id="container-jogos">

            <section id="scene" data-pointer-events="true" data-x-origin="0.5" data-y-origin="0.5" data-scalar-y="150.0" data-scalar-x="100.0" data-friction-x="0.05" data-friction-y="0.05">

                <div className="layer principal" data-depth="1.0">

                    {jogos.map((jogo)=>(
                        
                        <div className="col" key={jogo.id}>

                            <a href="#">

                                <div className="hover">

                                    <div className="pad align-botao">

                                        <h2>{jogo.title}</h2>
                                        
                                    </div>

                                    <div className="more"> <i className="demo-icon icon-plus" ></i></div>
                                </div>

                                <div className="fundo-img" style={{backgroundImage: `url(${jogo.imgUrl})`}}></div>
                            </a>

                        </div>

                    ))}

                </div>

            </section>

        </div>
    )
}