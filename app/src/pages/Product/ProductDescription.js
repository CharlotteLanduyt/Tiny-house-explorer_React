import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import animations from "../../javascript/motion";

export default function ProductDescription({productDescription, slug}){
    // Local state to toggle description visibility
    let [toggleDescription, setToggleDescription] = useState(true);

    return(
        <article>
            <h5>{slug}</h5>

            <AnimatePresence mode="wait">
                <motion.p
                    style={{ maxHeight: toggleDescription ? '20vh' : '0vh' }} // Toggling max height based on state
                    key={slug}
                    {...animations.scaleHeight(1)}
                >
                    {productDescription}
                </motion.p>
            </AnimatePresence>

            <div>
                {/* Button to toggle description visibility */}
                <button onClick={() => setToggleDescription(!toggleDescription)}>
                    {toggleDescription ? 'Close' : 'Open'}
                </button>


                <div>
                    <button>Info <span>+</span></button>
                    <button>
                        <i className="bi bi-bag-plus-fill"></i>
                    </button>
                </div>
            </div>
        </article>
    )
}