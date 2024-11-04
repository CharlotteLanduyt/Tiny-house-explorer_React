import { useState } from "react"

import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"


import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"


export default function Home(){
    const navigate = useNavigate();
    const products = useSelector((state) => state.products.products)

    let [openIndexes, setOpenIndexes] = useState([])


    function ToggleIndex(index){
        if(!openIndexes.includes(index)){
            setOpenIndexes([...openIndexes, index])
        }
    }

    function OpenPage(e, index){
        const images = document.querySelectorAll(".image")

        images.forEach((element,index) => {
            element.classList.remove("expand", `expand_${index}`)
        })
        e.currentTarget.classList.add("expand", `expand_${index}`)

        setTimeout(()=>{
            navigate(`/product/${index}/tinyhome`);
        },2000)
    }

    return(
    
        <section id="home">
            {products.map((product, index)=>(
                <NavLink className="products_links" key={product.id} onMouseOver={() => ToggleIndex(index)}>
                    <motion.div  onClick={(e)=>{OpenPage(e, index)}} className={"image"} style={{backgroundImage: `url(${product.tinyhome_image})`}}
                        initial= {{ height: "0%" }}
                        animate= {{ height: "100%" }}
                        exit= {{ height: "0%" }}
                        transition= {{ 
                            delay: (product.id) * 0.2,
                         }}
                    >
                        <div id="filter">
                            <h2>
                                <span>{product.country}</span>
                                {product.name}
                            </h2>
                        </div>
                    </motion.div>
                </NavLink>
            ))}
        </section>
    )
}