export default function Header_Salas(props){
    return( 
        <div>
            <div className="boxUser">

                <p className="lblUser">Usuario: {props.nome}, conectado</p>

                <button className="btn">Sign Out</button>

            </div>

            <p className="lblLogo">Guilty</p>

            <img src={props.link}/>

        </div>
     );
}