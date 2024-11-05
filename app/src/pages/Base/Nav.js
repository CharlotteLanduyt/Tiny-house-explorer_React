import { motion } from "framer-motion"; // Importing motion for animations
import { NavLink, useNavigate } from "react-router-dom"; // Importing NavLink and useNavigate for navigation

import { closePage } from "../../javascript/utils"; // Importing extern function for closing page

import animations from "../../javascript/motion";



export default function Nav() {

    const navigate = useNavigate(); // Hook to enable programmatic navigation
    const handleClose = () => {
        closePage(navigate);
    };
    

    return (
        <nav> 
            <NavLink onClick={handleClose} id="logo" aria-label="Return to homepage">
                My_Tiny
            </NavLink>

            <motion.p {...animations.fadeInUp}>
                Taste happiness in a tiny world.
            </motion.p>

            <motion.h1 {...animations.slideInRight}>
                <p>GET YOUR WONDERFUL<br/>TINY HOME</p>
                
                <NavLink to="about_us" aria-label="Explore our projects">
                    EXPLORE OUR PROJECT
                </NavLink>
                
                <NavLink to="contact" aria-label="Contact us">
                    CONTACT
                </NavLink>
            </motion.h1>
        </nav>
    );
}
