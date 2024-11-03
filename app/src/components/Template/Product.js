import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from "react-redux";

export default function Product() {
    const products = useSelector((state) => state.products.products);
    const { id, slug } = useParams();

    const [toggleDescription, setToggleDescription] = useState(true);

    const buttons = ["tinyhome", "mainroom", "bathroom", "landscape"];

    if (!products || !products[id]) {
        return <section id="product">Product not found.</section>;
    }

    return (
        <section id="product" style={{ backgroundImage: `url(${products[id][`${slug}_image`]})` }}>
            <div id="filter">
                <div>
                    <h5>{slug}</h5>

                    <AnimatePresence mode="wait">
                        <motion.p
                            style={{ maxHeight: toggleDescription ? "20vh" : "0vh" }}
                            key={slug}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 1 }}
                        >
                            
                            {products[id][`${slug}_description`]}
                        </motion.p>
                    </AnimatePresence>

                    <div>
                        <button onClick={() => {setToggleDescription(!toggleDescription)}}>{toggleDescription ? "Close":"Open"}</button>
                        
                        <div>
                            <button>Info <span>+</span></button>
                            <button>
                                <i className="bi bi-bag-plus-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    {buttons.map((element, index) => (
                        <NavLink to={`/product/${id}/${element}`} active={slug === element ? true : false}
                            key={index} 
                            id={element}
                        >
                            {element}
                        </NavLink>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
