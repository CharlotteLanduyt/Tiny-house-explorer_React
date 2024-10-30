import { useState } from "react"

import { Navigate, useOutletContext } from "react-router-dom"
import { useSelector } from "react-redux"



let openedLinks = []

export default function Home(){
    const products = useSelector((state) => state.products.products)

    const { closing_id } = useOutletContext();
    let [localClosingId, setLocalClosingId] = useState(closing_id);

    let [openIndexes, setOpenIndexes] = useState(openedLinks)
    openedLinks = openIndexes

    function ToggleIndex(index){
        if(!openIndexes.includes(index)){
            setOpenIndexes([...openIndexes, index])
        }
    }


    if(localClosingId){
        setTimeout(()=>{
            let expanded_link = document.querySelector(".expand")
            
            if(expanded_link){
                expanded_link.classList.remove("expand")
                expanded_link.style.transform = `translateX(0%)`
            }
            
            setLocalClosingId(null)
        },10)
    }

    let [toggleLink, setToggleLink] = useState(false)
    let [toggleId, setToggleId] = useState(null)

    function OpenLink(e, id){
        setToggleId(id-1)

        let link_image = e.currentTarget.querySelector(".image")
        link_image.classList.add("expand")
        link_image.style.transform = `translateX(-${25*(id-1)}%)`

        setTimeout(()=>{
            setToggleLink(true)
        }, 1000)
    }

    return(
    
        <section id="home">
            {!toggleLink && products.map((product, index)=>(
                <a className="products_links" key={product.id} onClick={(e) => OpenLink(e, product.id)} onMouseOver={() => ToggleIndex(index)}>
                    <div className={`image ${openedLinks.includes(index) || index === closing_id ? 'open' : ''} ${index === closing_id && 'expand'}`} style={{backgroundImage: `url(${product.image})`, transform: index === closing_id ? `translateX(-${25*(index)}%)`: ''}}>
                        <div id="filter">
                            <h2>
                                <span>{product.country}</span>
                                {product.name}
                            </h2>
                        </div>
                    </div>
                </a>
            ))}

            {toggleLink && <Navigate to={`/product/${toggleId}`} replace />}
        </section>
    )
}