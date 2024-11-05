import { useState } from "react"; // Importing useState hook from React to manage component state
import { NavLink, useNavigate } from "react-router-dom"; // Importing NavLink for navigation and useNavigate for programmatic navigation

import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import animations from "../../javascript/motion";

import { closePage } from "../../javascript/utils"; // Importing extern function for closing page

// Array of content for different chapters describing tiny house living
const chaptersContent = [
    {
        text: `Dreaming of building your own tiny house but want to experience it first? Our rental service offers a unique opportunity to “test-drive” a tiny home before committing to the build. We provide cozy, thoughtfully designed tiny houses across Belgium, Germany, Slovakia, and Croatia, allowing you to enjoy a hands-on experience of tiny living.
        Our tiny houses are crafted to maximize space, comfort, and environmental efficiency, giving you a taste of the minimalist, eco-friendly lifestyle that tiny homes are known for. By renting a tiny house, you can explore the flexibility, reduced environmental footprint, and innovative living spaces that come with tiny living—all without the commitment of ownership.
        Whether you’re interested in off-grid living, reducing your environmental impact, or simply exploring the freedom and simplicity of a smaller space, our rentals offer the perfect way to try it out firsthand. And as we continue to expand, we look forward to offering tiny house rentals in new locations, so more people around the world can experience the joys of tiny living.`,
    },
    {
        text: `In tiny living, every inch matters, and we’ve designed our rentals to capture the essence of smart, sustainable living. By staying in one of our tiny houses, you’ll get an inside look at how we optimize every detail to create a functional, efficient space. From energy systems to space-saving innovations, each element of our tiny houses is crafted to maximize comfort while minimizing environmental impact.
        We use advanced insulation materials and energy-efficient windows to keep our tiny homes comfortable all year round—whether you’re enjoying winter in Slovakia or soaking up the sun in Croatia. Many of our houses come equipped with solar panels, offering a glimpse of off-grid living that reduces your carbon footprint. You’ll also find features like composting toilets, greywater systems, and rainwater harvesting, letting you experience firsthand how these sustainable practices make tiny living not only eco-friendly but self-sufficient.
        Inside, we’ve carefully designed multi-functional furniture and storage solutions to show how every bit of space can be put to good use. Picture fold-out desks, convertible sofas, and discreet storage compartments—all with a purpose. Our compact kitchens have everything you need, from induction cooktops to energy-efficient appliances, proving that a smaller footprint doesn’t mean sacrificing comfort. This hands-on technical experience could spark inspiration for your own tiny house, helping you see how to make the most of limited space, energy, and resources.`,
    },
    {
        text: `Living tiny isn’t just a trend for us—it’s a lifestyle that has brought us unexpected, meaningful changes. Many of our guests share that their time in a tiny house helped them reassess what truly matters. For some, it’s a realization of how little they need to be content; for others, it’s a stepping stone to a more intentional, simplified life.
        When we first stayed in a tiny house, we were struck by the freedom it brought. Surrounded by fewer possessions, we felt more present, more focused on moments than on things. Cooking became a joy in the small but well-equipped kitchen, where each item held purpose and value. And with every day, we felt more connected to nature; the view from the tiny porch seemed even more expansive, and the beauty outside became woven into our routine.
        Tiny living encouraged us to shift our mindset. No longer did we feel the need to accumulate; instead, we found peace in simplicity. By renting one of our tiny houses, you too can explore whether this lifestyle resonates with you. It’s an opportunity to see how a small space can lead to big transformations, changing not just how you live but how you view the world.`,
    },
    {
        text: `Ready to start your tiny house journey? Book your stay today and discover if the tiny life is right for you!`,
        link: "/", // Link to navigate back to home or booking page
    },
];


export default function Description() {
    const [displayedChapter, setDisplayedChapter] = useState(0); // State to track the currently displayed chapter

    // Function to handle navigation to the previous chapter
    const handlePrevious = () => {
        setDisplayedChapter((prev) => Math.max(prev - 1, 0)); // Decrement chapter index, ensuring it doesn't go below 0
    };

    // Function to handle navigation to the next chapter
    const handleNext = () => {
        setDisplayedChapter((prev) => Math.min(prev + 1, chaptersContent.length - 1)); // Increment chapter index, ensuring it doesn't exceed the last chapter
    };

    const currentChapter = chaptersContent[displayedChapter]; // Get the current chapter content based on the displayed index

    const navigate = useNavigate(); // Initialize navigation hook for programmatic routing
    const handleClose = () => {
        closePage(navigate);
    };

    return(
        <motion.div id="description"
            {...animations.slideInLeft}
        >
            <h5>My Tiny </h5>

            <motion.p
                key={displayedChapter} // Unique key to trigger reanimation on chapter change
                {...animations.fadeIn}
            >
                {currentChapter.text} // Display the text of the current chapter
                {currentChapter.link && ( // Check if there's a link in the current chapter
                    <NavLink onClick={handleClose}>Begin your journey</NavLink>
                )}
            </motion.p>

            <div className="navigation">
                {displayedChapter > 0 && ( // Show previous button if not on the first chapter
                    <button onClick={handlePrevious} aria-label="Previous Chapter">
                        <i className="bi bi-arrow-left" aria-hidden="true"></i>
                    </button>
                )}
                
                <div>{displayedChapter + 1} / {chaptersContent.length}</div> {/* Display current chapter number and total chapters */}

                {displayedChapter < chaptersContent.length - 1 && (
                    <button onClick={handleNext} aria-label="Next Chapter">
                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                    </button>
                )}
            </div>
        </motion.div>
    );
}
