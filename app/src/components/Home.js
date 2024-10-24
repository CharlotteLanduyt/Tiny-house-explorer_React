import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

import { Navigate } from "react-router-dom"

export default function Home(){
    const products = [
        {
            'id': 1,
            'name': "Mossy Dwell",
            'price': 100,
            'forest': "Black Forest",
            'country': "Germany",
            'image':`/images/Tiny_house_1.png`,
        },
        {
            'id': 2,
            'name': "Leafy Hideaways",
            'price': 120,
            'forest': "Hallerbos",
            'country': "Belgium",
            'image':`/images/Tiny_house_2.png`,
        },
        {
            'id': 3,
            'name': "Cedar Havens",
            'price': 100,
            'forest': "Tatra National Park",
            'country': "Slovakia / Poland",
            'image':`/images/Tiny_house_3.png`,
        },
        {
            'id': 4,
            'name': "Forest Nooks",
            'price': 90,
            'forest': "Plitvice Lakes National Park",
            'country': "Croatia",
            'image':`/images/Tiny_house_4.png`,
        }
    ]

    let [openIndexes, setOpenIndexes] = useState([])

    function ToggleIndex(index){
        if(!openIndexes.includes(index)){
            setOpenIndexes([...openIndexes, index])
        }
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
                    <div className={`image ${openIndexes.includes(index) ? 'open' : ''}`} style={{backgroundImage: `url(${product.image})`}}>
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