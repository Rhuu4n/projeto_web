
import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "./menuBurger.css";



export function MenuBurger(){
    return(
        <div id="menuBurger">

            <Menu right >
                <ul>
                    <li>
                        <Link className="menu-item" href="/"> Blog </Link>
                        <Link className="menu-item" href="/estatisticas"> Estatisticas </Link>
                        <Link className="menu-item" href="/"> Sobre nós </Link>
                    </li>
                </ul>
            </Menu>

        </div>
       

    )
}
export default MenuBurger;