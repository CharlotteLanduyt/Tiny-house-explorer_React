import { NavLink } from "react-router-dom"

import { motion } from "framer-motion"
import animations from "../../javascript/motion"

export default function ProductNav({id}){
    // List of navigation buttons for different product sections
    const buttons = ['tinyhome', 'mainroom', 'bathroom', 'landscape'];

    return(
        <motion.article
            {...animations.fadeIn}
        >
            {buttons.map((element) => (
                <NavLink
                    to={`/product/${id}/${element}`} // Dynamic navigation based on section
                    className={({ isActive }) => (isActive ? 'active' : undefined)} // Active class for styling
                    key={element}
                    id={element}
                >
                    {element}
                </NavLink>
            ))}
        </motion.article>
    )
}