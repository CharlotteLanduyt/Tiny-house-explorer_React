import { useParams } from 'react-router-dom';

export default function Product(){
    const products = [
        {
            'id': 1,
            'name': "Mossy Dwell",
            'price': 100,
            'forest': "Black Forest",
            'country': "Germany",
            'image':`/images/Tiny_house_1.png`,
        },
        {
            'id': 2,
            'name': "Leafy Hideaways",
            'price': 120,
            'forest': "Hallerbos",
            'country': "Belgium",
            'image':`/images/Tiny_house_2.png`,
        },
        {
            'id': 3,
            'name': "Cedar Havens",
            'price': 100,
            'forest': "Tatra National Park",
            'country': "Slovakia / Poland",
            'image':`/images/Tiny_house_3.png`,
        },
        {
            'id': 4,
            'name': "Forest Nooks",
            'price': 90,
            'forest': "Plitvice Lakes National Park",
            'country': "Croatia",
            'image':`/images/Tiny_house_4.png`,
        }
    ]

    const {id} = useParams()

    return(
        <section id="product" style={{backgroundImage: `url(${products[id].image})`}}>
           <div id="filter">

            
           </div>
        </section>
    )
}