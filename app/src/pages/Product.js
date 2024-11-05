// Main imports
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import animations from '../javascript/motion';

// slices import
import ProductDescription from './Product/ProductDescription';
import ProductNav from './Product/ProductNav';


export default function Product() {
    // Accessing products from Redux store
    const products = useSelector((state) => state.products.products);


    let { id, slug } = useParams(); // Extracting URL parameters for product ID and section slug

    // Checking if the selected product exists in the store
    let product = products?.[id];
    let productDescription = product?.[`${slug}_description`]; // Dynamic description based on slug
    let productImage = product?.[`${slug}_image`]; // Dynamic image based on slug

    // If the product does not exist, display a "Product not found" message
    if (!product) {
        return <section id="product">Product not found.</section>;
    }


    return (
        <motion.section
            id="product"
            style={{ backgroundImage: `url(${productImage})` }}
            {...animations.scaleHeight(0.3)}
        >
            <div id="filter">
                <ProductDescription productDescription={productDescription} slug={slug} />

                <ProductNav id={id}/>
            </div>
        </motion.section>
    );
}
