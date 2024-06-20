import Link from "next/link";
import './AnimatedButton.css'

const AnimatedButton = ({nickname}) => {
    return ( 
        <div id="animatedbutton">
            <Link href="./autenticacao"> 
                <button className="btnLogin">
                    {nickname ? nickname: 'Log In'}
                </button>
            </Link>
        </div>
       
     );
}
 
export default AnimatedButton;