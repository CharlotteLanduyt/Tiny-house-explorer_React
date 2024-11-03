import { useState } from "react"

import { NavLink, Navigate, useOutletContext } from "react-router-dom"
import { useSelector } from "react-redux"

import { Outlet } from "react-router-dom"


export default function Home(){
    const products = useSelector((state) => state.products.products)

    let [openIndexes, setOpenIndexes] = useState([])


    function ToggleIndex(index){
        if(!openIndexes.includes(index)){
            setOpenIndexes([...openIndexes, index])
        }
    }

    return(
    
        <section id="home">
            {products.map((product, index)=>(
                <NavLink to={`/product/${product.id - 1}/tinyhome`} className="products_links" key={product.id} onMouseOver={() => ToggleIndex(index)}>
                    <div className={`image ${openIndexes.includes(index) ? 'open' : ''}`} style={{backgroundImage: `url(${product.tinyhome_image})`}}>
                        <div id="filter">
                            <h2>
                                <span>{product.country}</span>
                                {product.name}
                            </h2>
                        </div>
                    </div>
                </NavLink>
            ))}
        </section>
    )
}