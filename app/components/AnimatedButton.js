import Link from "next/link";
import './AnimatedButton.css'

const AnimatedButton = ({username, cl}) => {
    return ( 
        <div id="animatedbutton" className={cl} >
            <Link href="./autenticacao"> 
                <button className="btnLogin">
                    {username != "" ? username: 'Log In'}
                </button>
            </Link>
        </div>
       
     );
}
 
export default AnimatedButton;