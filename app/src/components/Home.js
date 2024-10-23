import { NavLink } from "react-router-dom"

export default function Home(){
    let products = [
        {
            'id': 1,
            'name': "Mossy Dwell",
            'price': 100,
            'forest': "Black Forest",
            'country': "Germany",
            'image':`${process.env.PUBLIC_URL}/images/tiny_house_1.jpg`,
        },
        {
            'id': 2,
            'name': "Leafy Hideaways",
            'price': 120,
            'forest': "Hallerbos",
            'country': "Belgium",
            'image':`${process.env.PUBLIC_URL}/images/tiny_house_2.jpg`,
        },
        {
            'id': 3,
            'name': "Cedar Havens",
            'price': 100,
            'forest': "Tatra National Park",
            'country': "Slovakia/Poland",
            'image':`${process.env.PUBLIC_URL}/images/tiny_house_3.jpg`,
        },
        {
            'id': 4,
            'name': "Forest Nooks",
            'price': 90,
            'forest': "Plitvice Lakes National Park",
            'country': "Croatia",
            'image':`${process.env.PUBLIC_URL}/images/tiny_house_4.jpg`,
        }
    ]

    return(
        <section id="home">
            <NavLink to="">

            </NavLink>
            
            <NavLink to="">

            </NavLink>

            <NavLink to="">

            </NavLink>
        </section>
    )
}