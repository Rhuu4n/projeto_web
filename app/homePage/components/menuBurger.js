
import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import "./menuBurger.css";
import AnimatedButton from "@/app/components/AnimatedButton";



export function MenuBurger(){
    return(
        <div id="menuBurger">

            <Menu right >
                <ul>
                    <li> <Link className="menu-item" href="/"> Blog </Link> </li>

                    <li> <Link className="menu-item" href="/estatisticas"> Estatisticas </Link> </li>

                    <li> <Link className="menu-item" href="/"> Sobre nós </Link> </li>
                </ul>
               
            </Menu>

        </div>
       
    )
}
export default MenuBurger;