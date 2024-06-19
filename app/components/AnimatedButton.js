import Link from "next/link";
import './AnimatedButton.css'

const AnimatedButton = () => {
    return ( 
        <div>
            <Link href="./autenticacao"> <button className="btnLogin"></button> </Link>
        </div>
       
     );
}
 
export default AnimatedButton;