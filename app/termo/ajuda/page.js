"use client"

import Link from "next/link";
import "../termo.css"

export default function Ajuda(){
    return(
        <div id="termo">
            <div className="boxJogo">
                <Link href={"./"} className="lblVoltar">Voltar</Link>
                <h1 className="lblTermo">Termo</h1>
                
                <div className="boxTermo">
                    <p>Como jogar?</p>

                    <hr/>

                    <div>
                        <p>
                        A cada tentativa, o jogo dá feedback usando cores para indicar o quão perto você está de adivinhar a palavra correta.<br/>
                        As cores têm os seguintes significados:
                        Termo é um jogo de palavras onde o objetivo é adivinhar uma palavra secreta de cinco letras em até seis tentativas.<br/>
                        </p>
                    </div>
                    <hr/>
                    <div>
                        <p>Verde: A letra está na palavra secreta e a posição correta.<br/>
                        Amarelo: A letra está na palavra secreta, mas em outra posição.<br/>
                        Cinza: A letra não está na palavra secreta.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}