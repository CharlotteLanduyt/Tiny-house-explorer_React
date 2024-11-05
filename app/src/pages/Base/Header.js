import { NavLink, useNavigate } from "react-router-dom"; // Importing NavLink for navigation and useNavigate for programmatic navigation
import { useSelector } from "react-redux"; // Importing useSelector from react-redux to access the Redux store's state
import { motion } from "framer-motion"; // Importing motion from framer-motion for animations

import {openPage} from "../../javascript/utils";

import animations from "../../javascript/motion";

export default function Header() {
    const navigate = useNavigate(); // Hook to navigate programmatically between routes
    const products = useSelector((state) => state.products.products); // Accessing products array from Redux store


    return (
        <section id="header">
            {products.map((product, index) => ( // Mapping over each product in the products array
                <NavLink 
                    className="products_links" 
                    key={product.id} 
                    aria-label={`View product ${product.name} located in ${product.country}`}
                >
                    <motion.div  
                        onClick={(e) => openPage(e, index, navigate)}
                        className="image"
                        style={{ backgroundImage: `url(${product.tinyhome_image})` }}
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        exit={{ height: "0%" }}
                        transition={{ delay: product.id * 0.2 }}
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
    );
}
