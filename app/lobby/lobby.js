import HeaderLobby from "./components/headerLobby";
import BodyLobby from "./components/bodyLobby";
import FooterLobby from "./components/footerLobby";
import "./login.css"
import { useEffect } from "react";
import axios from "axios";

export default function Lobby(props){

    function cadastraPartida(){
        const partida = {
            Jogador_ID: props.idUsuario,
            id_sala: props.idSala,
            Ordem: 1,
            Moedas: 0,
            Carta_1: 1,
            Carta_2: 1,
            Acao: null,
            Afetado: null
          }
      
          axios
            .post('/api/matches', partida, {
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(function (response) {
              console.log(response.data)
              props.alteraIdPartida(response.data)
            })
            .catch(function (error) {
              console.error('erro:' + error)
            })
    }

    useEffect(() => {
        cadastraPartida()
    })

    return(
        <div id="login">
            <div className="container">
                <HeaderLobby idSala={props.idSala} className="container"/>
                <BodyLobby/>
                <FooterLobby/>
            </div>
        </div>
    )
}