import Checkbox from "./check"
import "./style.css"




export default function Autenticacao(){


return(
    <div id="autenticacao">
   	<h1>Login</h1>

    	<input type="text" placeholder="Username"/>
     
        <input type="password" placeholder="Password"/> <br/>
        <Checkbox/>
        
        <button id="botaoLogin"> Acesse</button>
  
            
    </div>
    )
}