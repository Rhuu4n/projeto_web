export default function Header_Salas(props){
    return( 
        <div>
            <p>Guilty</p>

            <img src={props.link}/>

            <p>Usuario: {props.nome}, conectado</p>

            <button>Sign Out</button>
        </div>
     );
}