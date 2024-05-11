const Lista = ( props ) => {
    return ( 
        <div>
            <h1>{props.titulo}</h1>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
            </ul>
        </div>
     );
}
 
export default Lista;