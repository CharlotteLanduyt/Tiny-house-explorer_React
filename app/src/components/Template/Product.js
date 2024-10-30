import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { useSelector } from "react-redux"


export default function Product(){
    const products = useSelector((state) => state.products.products)

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