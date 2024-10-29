import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

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
            'landscape_image':`/images/Tiny_house_1_landscape.png`,
            'main_description': "Nestled deep within the enchanting Black Forest of Germany, this tiny house is a haven of rustic charm and modern elegance, designed to captivate and inspire. Surrounded by towering firs and ancient pines, the tiny house is an idyllic sanctuary where nature and luxury coalesce. The exterior, crafted from locally sourced wood and dark stone, harmonizes effortlessly with the lush green surroundings, almost camouflaging itself within the heart of the forest.",
            'inside_description': "Step inside, and you'll find the coziest of spaces, flooded with natural light from large panoramic windows that bring the beauty of the forest indoors. Warm wooden finishes, and Scandinavian-inspired decor create a welcoming atmosphere, perfect for unwinding after a day of exploring the surrounding trails and hidden waterfalls. The tiny home offers a mesmerizing view of the forest canopy, allowing you to drift off under a starlit sky and wake to the soft rustling of leaves and birdsong.",
            'bathroom_description': "With every modern amenity subtly integrated, including a compact kitchen, eco-friendly energy systems, and a spa-like bathroom with a rain shower, this tiny house offers an experience that feels both sustainable and indulgent. Imagine savoring your morning coffee on the private deck, wrapped in the misty embrace of the Black Forest, where time seems to slow down, and the magic of nature is yours to enjoy. This tiny home is not just a place to stay; it’s a doorway to reconnect with the wilderness and rediscover a simpler, yet deeply fulfilling, way of life.",
            'landscape_description': ""
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
            'landscape_image':`/images/Tiny_house_2_landscape.png`,
            'main_description': "",
            'inside_description': "",
            'bathroom_description': "",
            'landscape_description': ""
        },
        {
            'id': 3,
            'name': "Cedar Havens",
            'price': 100,
            'forest': "Tatra National Park",
            'country': "Slovakia / Poland",
            'image':`/images/Tiny_house_3.png`,
            'landscape_image':`/images/Tiny_house_3_landscape.png`,
            'inside_image':`/images/Tiny_house_3_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_3_bathroom.png`,
            'main_description': "",
            'inside_description': "",
            'bathroom_description': "",
            'landscape_description': ""
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
            'landscape_image':`/images/Tiny_house_4_landscape.png`,
            'main_description': "",
            'inside_description': "",
            'bathroom_description': "",
            'landscape_description': ""
        }
    ]

    const {id} = useParams()

    let [background,setBackground] = useState(products[id].image)
    let [description, setDescription] = useState(products[id].main_description)

    return(
        
        <section id="product" style={{backgroundImage: `url(${background})`}}>
            <div id="filter">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={description}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ duration: 0.3}}
                    >
                        <motion.p
                            key={description}
                            initial={{height: 0}}
                            animate={{height: "auto"}}
                            exit={{height: 0}}
                            transition={{ duration: 0.5}}
                        >
                            {description}
                        </motion.p>

                        <button>Book</button>
                        <button>Construction estimate</button>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                    <button id="bathroom" onClick={()=>{setBackground(products[id].bathroom_image); setDescription(products[id].bathroom_description)}}>Bathroom</button>
                    <button id="mainroom" onClick={()=>{setBackground(products[id].inside_image); setDescription(products[id].inside_description)}}> Main room</button>
                    <button id="tinyhome" onClick={()=>{setBackground(products[id].image); setDescription(products[id].main_description)}}> {products[id].name}</button>
                    <button id="landscape" onClick={()=>{setBackground(products[id].landscape_image); setDescription(products[id].landscape_description)}}> {products[id].forest}</button>
                </motion.div>
            </div>
        </section>
   
    )
}