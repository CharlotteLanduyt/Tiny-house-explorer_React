// Main imports
import { motion } from 'framer-motion'; // Importing motion for animations

// Animation configuration
import animations from '../javascript/motion';


export default function Contact() {
    // Form field data (easily modifiable)
    const formFields = [
        { placeholder: 'Name', maxLength: 15, name: 'name' },
        { placeholder: 'Surname', maxLength: 15, name: 'surname' },
        { placeholder: 'Object', maxLength: 10, name: 'object' },
    ];

    return (
        <section id="contact">
            {/* Contact Form */}
            <motion.article {...animations.fadeInUp} id="contact_form">
                <h5>Contact Us</h5>
                
                <form action="">
                    <div>
                        {/* Generating input fields dynamically from formFields data */}
                        {formFields.map((field, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={field.placeholder}
                                maxLength={field.maxLength}
                                name={field.name}
                            />
                        ))}
                    </div>
                    
                    <textarea name="message" placeholder="Your message" maxLength={150} />

                    <button type="submit">Submit</button>
                </form>

                <p>
                    <i className="bi bi-chat-heart-fill"></i> Leave us a message about your thoughts, your questions, your reflections
                </p>
            </motion.article>

            {/* Contact Information */}
            <article id="contact_info">
                <p>Phone number: <a href="tel:+32222222222">+32 222 22 22 22</a></p>
                <p>Mail: <a hre="my.tiny@gmail.com">my.tiny@gmail.com</a></p>
                <p>Address: <span>123 Rue de la Paix, 1000 Brussels</span></p>
            </article>
        </section>
    );
}
