import { useSelector } from "react-redux"; // Importing useSelector from react-redux to access the Redux store's state
import { useState } from "react"; // Importing useState hook from React to manage component state

import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import animations from "../../javascript/motion";

export default function Testimonials() {
    // Accessing the testimonials array from the Redux store; if no testimonials exist, default to an empty array
    const testimonials = useSelector((state) => state.testimonials.testimonials) || [];

    // State to track a random index within the testimonials array, initially set to a random testimonial
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * testimonials.length));

    // Function to select a new random index, ensuring it’s different from the current index
    function newRandom() {
        let random;
        do {
            random = Math.floor(Math.random() * testimonials.length); // Generate a random index
        } while (random === randomIndex); // Ensure the new index differs from the current one
        
        setRandomIndex(random); // Update state with the new random index
    }

    // Check if testimonials are available; if not, set testimonialIndex to null
    const testimonialIndex = testimonials.length > 0 ? randomIndex : null;

    return (
        <div id="testimonials">
            <p>Testimonials</p>

            {testimonialIndex !== null ? ( // Conditionally render testimonial content if testimonials exist
                <motion.article 
                    {...animations.slideInRight}
                >
                    <motion.div
                        key={randomIndex} // Key set to re-render when randomIndex changes
                        {...animations.fadeIn}
                    >
                        <h5>
                            {testimonials[testimonialIndex].name} {testimonials[testimonialIndex].surname}
                        </h5>

                        <p>{testimonials[testimonialIndex].date}</p>
                        <p>{testimonials[testimonialIndex].testimonial}</p>

                        <div>
                            {Array.from({ length: 5 }, (_, index) => { // Loop through 5 star placeholders
                                const stars = testimonials[testimonialIndex].stars; // Number of stars for this testimonial
                                const fullStars = Math.floor(stars); // Full stars count (rounded down)
                                const hasHalfStar = stars % 1 !== 0; // Boolean indicating if there's a half star

                                // Render filled, half, or empty stars based on the rating
                                return (
                                    index < fullStars ? (
                                        <i key={index} className="bi bi-star-fill"></i>
                                    ) : (
                                        index === fullStars && hasHalfStar ? (
                                            <i key={index} className="bi bi-star-half"></i>
                                        ) : (
                                            <i key={index} className="bi bi-star"></i>
                                        )
                                    )
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Button to load a new random testimonial */}
                    <button onClick={newRandom} disabled={testimonials.length === 0}> {/* Disabled if no testimonials */}
                        <i className="bi bi-arrow-clockwise"></i>
                    </button>
                </motion.article>
            ) : (
                <p>No testimonials yet</p> // Message displayed if no testimonials are available
            )}
        </div>
    );
}
