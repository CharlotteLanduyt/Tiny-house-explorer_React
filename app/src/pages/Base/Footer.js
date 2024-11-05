import { motion } from "framer-motion"; // Importing motion from framer-motion for animations

import animations from "../../javascript/motion";


export default function Footer() {
    // Array of social media links with their URLs and labels
    const socialLinks = [
        { href: "https://facebook.com", label: "Facebook" },
        { href: "https://linkedin.com", label: "LinkedIn" },
        { href: "https://instagram.com", label: "Instagram" },
    ];

    return (
        <motion.footer {...animations.slideInRight}>
            <ul className="social-links">
                {socialLinks.map(({ href, label }) => ( // Looping through each social link in the array
                    <li key={label}> 
                        <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                            {/* Link opens in a new tab; rel="noopener noreferrer" for security */}
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.footer>
    );
}
