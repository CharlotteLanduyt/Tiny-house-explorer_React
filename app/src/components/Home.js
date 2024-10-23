import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Home(){
    let products = [
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
            'country': "Slovakia/Poland",
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

    function toggleIndex(index){
        if(!openIndexes.includes(index)){
            setOpenIndexes([...openIndexes, index])
        }
    }

    return(
        <section id="home">
            {products.map((product, index)=>(
                <NavLink className="products_links" key={product.id} to="" onMouseOver={() => toggleIndex(index)}>
                    <div className={`image ${openIndexes.includes(index) ? 'open' : ''}`} style={{backgroundImage: `url(${product.image})`, animation: ``}}>
                        <div></div>
                    </div>
                </NavLink>
            ))}
        </section>
    )
}