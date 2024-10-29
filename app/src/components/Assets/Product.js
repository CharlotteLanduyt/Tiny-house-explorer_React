import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Product(){
    const products = [
        {
            'id': 1,
            'name': "Mossy Dwell",
            'price': 100,
            'forest': "Black Forest",
            'country': "Germany",
            'image':`/images/Tiny_house_1.png`,
            'inside_image':`/images/Tiny_house_1_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_1_bathroom.png`,
            'landscape_image':`/images/Tiny_house_1_landscape.png`,
            'main_description': "Nestled deep within the enchanting Black Forest of Germany, this tiny house is a haven of rustic charm and modern elegance, designed to captivate and inspire. Surrounded by towering firs and ancient pines, the tiny house is an idyllic sanctuary where nature and luxury coalesce. The exterior, crafted from locally sourced wood and dark stone, harmonizes effortlessly with the lush green surroundings, almost camouflaging itself within the heart of the forest.",
            'inside_description': "Step inside, and you'll find the coziest of spaces, flooded with natural light from large panoramic windows that bring the beauty of the forest indoors. Warm wooden finishes, and Scandinavian-inspired decor create a welcoming atmosphere, perfect for unwinding after a day of exploring the surrounding trails and hidden waterfalls. The tiny home offers a mesmerizing view of the forest canopy, allowing you to drift off under a starlit sky and wake to the soft rustling of leaves and birdsong.",
            'bathroom_description': "With every modern amenity subtly integrated, including a compact kitchen, eco-friendly energy systems, and a spa-like bathroom with a rain shower, this tiny house offers an experience that feels both sustainable and indulgent. Imagine savoring your morning coffee on the private deck, wrapped in the misty embrace of the Black Forest, where time seems to slow down, and the magic of nature is yours to enjoy. This tiny home is not just a place to stay; it’s a doorway to reconnect with the wilderness and rediscover a simpler, yet deeply fulfilling, way of life.",
            'landscape_description': "The Black Forest, or Schwarzwald, is a stunning region in southwestern Germany known for its dense, evergreen forests, picturesque villages, and rich folklore. Renowned for its breathtaking landscapes, it offers a variety of activities for outdoor enthusiasts and nature lovers."
        },
        {
            'id': 2,
            'name': "Leafy Hideaways",
            'price': 120,
            'forest': "Hallerbos",
            'country': "Belgium",
            'image':`/images/Tiny_house_2.png`, 
            'inside_image':`/images/Tiny_house_2_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_2_bathroom.png`,
            'landscape_image':`/images/Tiny_house_2_landscape.png`,
            'main_description': "Nestled in the heart of Hallerbos, this tiny house is a charming retreat that perfectly embodies the essence of sustainable living. Built with a blend of natural materials and modern design, it offers an inviting atmosphere that harmonizes with the surrounding forest. The house features large windows that flood the interior with natural light, allowing guests to feel connected to nature while enjoying all the comforts of home. With its cozy design and thoughtful layout, this tiny house provides an ideal escape from the hustle and bustle of daily life.",
            'inside_description': "Inside, the living space is a delightful fusion of comfort and functionality. The cozy bedroom loft features a plush mattress and soft linens, offering a restful sanctuary where you can unwind after a day of exploration. The compact kitchen, equipped with modern appliances and ample storage, invites culinary creativity, whether you're whipping up a quick breakfast or a gourmet dinner. A small dining area provides the perfect spot to enjoy meals while soaking in the tranquil views of the forest, making every moment spent here feel special.",
            'bathroom_description': "The bathroom is a serene oasis designed for relaxation. Featuring a spacious rain shower and eco-friendly fixtures, it combines style with sustainability. Natural materials and soft colors create a calming environment, allowing you to refresh and rejuvenate after your adventures. Thoughtfully designed with both comfort and practicality in mind, the bathroom becomes a personal retreat where you can indulge in moments of self-care while surrounded by the sounds of nature.",
            'landscape_description': "Hallerbos itself is a breathtaking natural wonder, renowned for its stunning carpets of bluebells that bloom in spring. This ancient forest is a tapestry of towering trees, lush greenery, and vibrant flowers, creating an idyllic setting for leisurely walks and outdoor adventures. As you explore the winding trails, you’ll encounter the enchanting sights and sounds of wildlife, making every visit to Hallerbos a unique experience. With its serene ambiance and captivating beauty, this magical forest invites you to reconnect with nature and embrace the tranquility of the great outdoors."
        },
        {
            'id': 3,
            'name': "Cedar Havens",
            'price': 100,
            'forest': "Tatra National Park",
            'country': "Slovakia / Poland",
            'image':`/images/Tiny_house_3.png`,
            'landscape_image':`/images/Tiny_house_3_landscape.png`,
            'inside_image':`/images/Tiny_house_3_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_3_bathroom.png`,
            'main_description': "Nestled within the breathtaking Tatra National Park, this tiny house is a harmonious blend of rustic charm and modern design, offering a unique retreat amid the stunning mountain landscape. Crafted from natural materials, the house seamlessly integrates into its surroundings, providing a cozy haven for those seeking adventure and tranquility. With panoramic windows that frame the majestic peaks and lush valleys, every corner of this home invites you to bask in the beauty of the great outdoors, making it a perfect escape from the everyday.",
            'inside_description': "Inside, the living space is both inviting and functional, designed to maximize comfort in a compact area. The lofted bedroom boasts a plush bed with warm linens, creating an intimate sanctuary for restful nights. The compact kitchen is fully equipped, featuring modern appliances and clever storage solutions, making it easy to prepare meals using local ingredients. A cozy dining nook offers the perfect spot to enjoy meals while gazing out at the awe-inspiring views of the Tatra Mountains, ensuring that every dining experience is a memorable one.",
            'bathroom_description': "The bathroom is a serene retreat, featuring a sleek rain shower and eco-friendly fixtures that emphasize sustainability. Natural stone elements and earthy tones create a calming atmosphere, allowing you to unwind after a day of hiking or skiing. Thoughtfully designed to provide both comfort and convenience, the bathroom offers a refreshing space where you can recharge and enjoy a moment of peace surrounded by the beauty of nature.",
            'landscape_description': "Tatra National Park is a natural gem, known for its dramatic landscapes, pristine lakes, and diverse wildlife. This UNESCO Biosphere Reserve is home to some of the highest peaks in Poland and Slovakia, offering countless opportunities for outdoor enthusiasts. From picturesque hiking trails and thrilling mountain climbs to serene moments spent by crystal-clear lakes, the park is a playground for adventure seekers and nature lovers alike. With its enchanting scenery and rich biodiversity, Tatra National Park invites you to immerse yourself in the splendor of the great outdoors, making your stay in this tiny house an unforgettable experience."
        },
        {
            'id': 4,
            'name': "Forest Nooks",
            'price': 90,
            'forest': "Plitvice Lakes National Park",
            'country': "Croatia",
            'image':`/images/Tiny_house_4.png`,
            'inside_image':`/images/Tiny_house_4_mainroom.png`,
            'bathroom_image':`/images/Tiny_house_4_bathroom.png`,
            'landscape_image':`/images/Tiny_house_4_landscape.png`,
            'main_description': "Set against the breathtaking backdrop of Plitvice Lakes National Park, this tiny house offers a serene retreat immersed in nature's splendor. Designed with a perfect blend of rustic charm and modern aesthetics, the home is constructed from natural materials that echo the surrounding landscape. With large windows that provide panoramic views of the park’s stunning waterfalls and lush greenery, every moment spent here is a reminder of the beauty of the great outdoors, making it an ideal escape for those seeking tranquility and adventure.",
            'inside_description': "Inside, the living space is a cozy haven that maximizes comfort and functionality. The lofted bedroom features a comfortable bed adorned with soft linens, providing a peaceful sanctuary for restful nights. The compact kitchen is equipped with modern appliances, inviting you to whip up delicious meals with local ingredients. A charming dining area allows you to savor your culinary creations while gazing out at the mesmerizing views of the cascading lakes and surrounding forest, ensuring that every meal feels special.",
            'bathroom_description': "The bathroom is a refreshing retreat, featuring a spacious rain shower and eco-friendly fixtures that emphasize sustainability. The use of natural materials and soothing colors creates a tranquil atmosphere, allowing you to unwind after a day of exploring the park's breathtaking trails. Thoughtfully designed to provide both comfort and practicality, this bathroom offers a rejuvenating space where you can indulge in moments of relaxation amidst the beauty of nature.",
            'landscape_description': "Plitvice Lakes National Park is a UNESCO World Heritage site renowned for its stunning network of cascading lakes and vibrant waterfalls. This natural wonder features a breathtaking landscape of turquoise waters surrounded by lush forests and diverse wildlife. With numerous walking trails that wind through the park, visitors can immerse themselves in the enchanting scenery and witness the ever-changing beauty of the lakes as they shift in color with the seasons. Whether you’re hiking the scenic paths or simply enjoying the tranquility of the surroundings, Plitvice Lakes National Park is a magical destination that invites you to reconnect with nature and experience the awe of the great outdoors."
        }
    ]

    const {id} = useParams()

    let [background,setBackground] = useState(products[id].image)
    let [description, setDescription] = useState(products[id].main_description)

    return(
        
        <section id="product" style={{backgroundImage: `url(${background})`}}>
            <div id="filter">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={description}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{ duration: 0.3}}
                    >
                        <motion.p
                            key={description}
                            initial={{height: 0}}
                            animate={{height: "auto"}}
                            exit={{height: 0}}
                            transition={{ duration: 0.5}}
                        >
                            {description}
                        </motion.p>

                        <button>Book</button>
                        <button>Construction estimate</button>
                    </motion.div>
                </AnimatePresence>

                <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                    <button id="bathroom" onClick={()=>{setBackground(products[id].bathroom_image); setDescription(products[id].bathroom_description)}}>Bathroom</button>
                    <button id="mainroom" onClick={()=>{setBackground(products[id].inside_image); setDescription(products[id].inside_description)}}> Main room</button>
                    <button id="tinyhome" onClick={()=>{setBackground(products[id].image); setDescription(products[id].main_description)}}> {products[id].name}</button>
                    <button id="landscape" onClick={()=>{setBackground(products[id].landscape_image); setDescription(products[id].landscape_description)}}> {products[id].forest}</button>
                </motion.div>
            </div>
        </section>
   
    )
}