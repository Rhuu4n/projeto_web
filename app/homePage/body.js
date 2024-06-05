"use client"



import { useEffect, useRef, useState } from "react"
import {motion, useScroll, useSpring} from "framer-motion"
import "./font.css"
import "./styleBody.css"




export default function Body () {

    const items = [
        {
        id: 1,
        title: "Guilty",
        img: "https://c4.wallpaperflare.com/wallpaper/892/692/922/howl-s-moving-castle-studio-ghibli-fantasy-art-clouds-daylight-hd-wallpaper-thumb.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor nisl lectus, molestie ultrices risus sodales id. Mauris sit amet elementum dui. Vivamus tincidunt interdum velit. Cras vel condimentum nisi."
        },
        
        {
        id: 2,
        title: "Termo",
        img: "https://c4.wallpaperflare.com/wallpaper/262/774/423/space-stars-nebula-tylercreatesworlds-wallpaper-thumb.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor nisl lectus, molestie ultrices risus sodales id. Mauris sit amet elementum dui. Vivamus tincidunt interdum velit. Cras vel condimentum nisi."
        },
        {
        id: 3,
        title: "Em breve",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UpMqGGuVEA4rzvlOVec211MdnAj5_ddVS6XTddbKE56tIIrxTsNxaftOOEHlHcZKQw4&usqp=CAU",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor nisl lectus, molestie ultrices risus sodales id. Mauris sit amet elementum dui. Vivamus tincidunt interdum velit. Cras vel condimentum nisi."
        },
        {
        id: 4,
        title: "Em breve",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UpMqGGuVEA4rzvlOVec211MdnAj5_ddVS6XTddbKE56tIIrxTsNxaftOOEHlHcZKQw4&usqp=CAU",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor nisl lectus, molestie ultrices risus sodales id. Mauris sit amet elementum dui. Vivamus tincidunt interdum velit. Cras vel condimentum nisi."
        },
    ];

    const Single = ({item}) =>{
        return ( <section> {item.title} </section>)
    }



    


    useEffect(()=>{
    }, []);


    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping: 30,
    })

    return(

        <div id="container-body">

            <div className="txtMenuJogos" ref={ref}> 
                <h1> Jogos disponiveis </h1> 
                <motion.div style={{scaleX:scaleX}} className="ProgressBar"> </motion.div>

            </div>

                {items.map(item=>(
                    < Single item={item} key={item.id} /> 
                ))}

        </div>

    )
}