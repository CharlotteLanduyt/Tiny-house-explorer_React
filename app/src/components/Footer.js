import { motion } from "framer-motion"

export default function Footer({slideInRight}){
    return(
        <motion.footer {...slideInRight} >
            <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
            <a href="https://linkedin.com" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
        </motion.footer>
    )
}