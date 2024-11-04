import { useState } from "react";
import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

// Define content as data for maintainability
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
        link: "/",
    },
];

export default function AboutUs() {
    const [displayedChapter, setDisplayedChapter] = useState(0);

    const handlePrevious = () => {
        setDisplayedChapter((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setDisplayedChapter((prev) => Math.min(prev + 1, chaptersContent.length - 1));
    };

    const currentChapter = chaptersContent[displayedChapter];

    return (
        <motion.section id="about_us"
            initial={{ x: -200}}
            animate={{ x: 0 }}
            exit={{ x: -200 }}
            transition={{ duration: 1 }}
        >
            <div id="description">
                <h2>My Tiny </h2>

                <motion.p
                    key={displayedChapter}
                    initial= {{ opacity: 0 }}
                    animate= {{ opacity: 1 }}
                    exit= {{ opacity: 0 }}
                    transition= {{ duration: 1 }}
                >
                    {currentChapter.text} 
                    {currentChapter.link && (
                        <NavLink to={currentChapter.link}>Begin your journey</NavLink>
                    )}
                </motion.p>

                <div className="navigation">
                    {displayedChapter > 0 && (
                        <button onClick={handlePrevious} aria-label="Previous Chapter">
                            <i className="bi bi-arrow-left" aria-hidden="true"></i>
                        </button>
                    )}
                    
                    <div>{displayedChapter + 1} / {chaptersContent.length}</div>

                    {displayedChapter < chaptersContent.length - 1 && (
                        <button onClick={handleNext} aria-label="Next Chapter">
                            <i className="bi bi-arrow-right" aria-hidden="true"></i>
                        </button>
                    )}
                </div>
            </div>

            <div id="testimonials">

            </div>
        </motion.section>
    );
}
