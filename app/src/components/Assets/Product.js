import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Product(){
    const products = [
        {
            'id': 1,
            'name': "Mossy Dwell",
            'price': 100,
            'forest': "Black Forest",
            'country': "Germany",
            'image':`/images/Tiny_house_1.png`,
            'inside_image':`/images/Tiny_house_1_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_1_bathroom.png`,
        },
        {
            'id': 2,
            'name': "Leafy Hideaways",
            'price': 120,
            'forest': "Hallerbos",
            'country': "Belgium",
            'image':`/images/Tiny_house_2.png`,
            'inside_image':`/images/Tiny_house_2_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_2_bathroom.png`,
        },
        {
            'id': 3,
            'name': "Cedar Havens",
            'price': 100,
            'forest': "Tatra National Park",
            'country': "Slovakia / Poland",
            'image':`/images/Tiny_house_3.png`,
            'inside_image':`/images/Tiny_house_3_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_3_bathroom.png`,
        },
        {
            'id': 4,
            'name': "Forest Nooks",
            'price': 90,
            'forest': "Plitvice Lakes National Park",
            'country': "Croatia",
            'image':`/images/Tiny_house_4.png`,
            'inside_image':`/images/Tiny_house_4_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_4_bathroom.png`,
            'main_description': "",
            'inside_description': "",
            'bathroom_description': "",
        }
    ]

    const {id} = useParams()

    let [background,setBackground] = useState(products[id].image)
    let [description, setDescription] = useState(products[id].main_description)

    return(
        
        <section id="product" style={{backgroundImage: `url(${background})`}}>
            <div id="filter">
                <div>
                    <p>{description}</p>

                    <button>Book</button>
                    <button>Buy</button>
                </div>
                <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                    <button id="bathroom" onClick={()=>{setBackground(products[id].bathroom_image)}}>Bathroom</button>
                    <button id="mainroom" onClick={()=>{setBackground(products[id].inside_image)}}> Main room</button>
                    <button id="tinyhome" onClick={()=>{setBackground(products[id].image)}}> {products[id].name}</button>
                </motion.div>
            </div>
        </section>
   
    )
}