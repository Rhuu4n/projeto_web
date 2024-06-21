import Link from "next/link";
import './AnimatedButton.css'

const AnimatedButton = ({username}) => {
    return ( 
        <div id="animatedbutton">
            <Link href="./autenticacao"> 
                <button className="btnLogin">
                    {username != "" ? username: 'Log In'}
                </button>
            </Link>
        </div>
       
     );
}
 
export default AnimatedButton;