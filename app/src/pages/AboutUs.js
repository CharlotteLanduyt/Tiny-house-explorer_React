import Testimonials from "./AboutUs/Testimonials"; // Importing the Testimonials component
import Description from "./AboutUs/Description"; // Importing the Description component


export default function AboutUs() {
    return (
        <section id="about_us">
            <Description />

            <Testimonials />
        </section>
    );
}
