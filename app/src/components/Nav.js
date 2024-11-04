import { motion } from "framer-motion"
import { NavLink, useNavigate } from "react-router-dom"

export default function Nav({slideInRight,fadeInUp}){
    const navigate = useNavigate();

    function ClosePage(){
        const images = document.querySelectorAll(".image")

        images.forEach((element,index) => {
            element.classList.remove("expand", `expand_${index}`)
        })

        setTimeout(()=>{
            navigate(`/`);
        }, 200)
    }

    return(
        <nav>
            <NavLink onClick={ClosePage} id="logo"> 
                My_Tiny
            </NavLink>

            <motion.p {...fadeInUp}>
                Taste happiness in a tiny world.
            </motion.p>

            <motion.h1 {...slideInRight}>
                <p>GET YOUR WONDERFULL TINY HOME</p>
                
                <NavLink to="about_us">EXPLORE OUR PROJECT</NavLink>
                <NavLink to="contact">CONTACT</NavLink>
            </motion.h1>
        </nav>
    )
}