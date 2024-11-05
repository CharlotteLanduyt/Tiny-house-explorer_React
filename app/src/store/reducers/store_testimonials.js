const initialState = {
    testimonials: [
        {
            'id': 1,
            'name': "Alice",
            'surname': "Anderson",
            'stars': 5,
            'testimonial': "Staying in this tiny house was a dream ! The location was perfect, and it gave me a real feel for tiny living.",
            'date': "10 / 01 / 2024"
        },
        {
            'id': 2,
            'name': "Tom",
            'surname': "Harris",
            'stars': 4.5,
            'testimonial': "Great experience ! The house was modern and cozy, just what I was looking for.",
            'date': "10 / 02 / 2024"
        },
        {
            'id': 3,
            'name': "Liam",
            'surname': "Clark",
            'stars': 5,
            'testimonial': "Absolutely loved the tiny house ! It was stylish and in a fantastic location. Can't wait to buy one !",
            'date': "10 / 03 / 2024"
        },
        {
            'id': 4,
            'name': "Emma",
            'surname': "Martinez",
            'stars': 3,
            'testimonial': "It was a nice experience, but I found the space a bit smaller than I imagined.",
            'date': "10 / 04 / 2024"
        },
        {
            'id': 5,
            'name': "Noah",
            'surname': "Garcia",
            'stars': 5,
            'testimonial': "Incredible stay ! The tiny house was well-equipped, and the view was stunning.",
            'date': "10 / 05 / 2024"
        },
        {
            'id': 6,
            'name': "Olivia",
            'surname': "Davis",
            'stars': 4,
            'testimonial': "Very charming and modern. I enjoyed the minimalist lifestyle for a weekend.",
            'date': "10 / 06 / 2024"
        },
        {
            'id': 7,
            'name': "James",
            'surname': "Wilson",
            'stars': 5,
            'testimonial': "Fantastic place to stay ! It helped me decide on the type of tiny house I want to purchase.",
            'date': "10 / 07 / 2024"
        },
        {
            'id': 9,
            'name': "Ethan",
            'surname': "Taylor",
            'stars': 3.5,
            'testimonial': "Loved the modern design ! It was a perfect trial before buying.",
            'date': "10 / 09 / 2024"
        },
        {
            'id': 10,
            'name': "Mia",
            'surname': "Martinez",
            'stars': 5,
            'testimonial': "Exceptional experience ! The tiny house felt like home, and I got to explore the area.",
            'date': "10 / 10 / 2024"
        }
    ]    
};
  
// Reducer function for managing testimonials data
const testimonials_objects = (state = initialState, action) => {
    // Switch statement for handling different action types
    switch (action.type) {
        default:
            return state; // Return the current state for any unknown action
    }
};

// Export the reducer to be combined with other reducers in the Redux store
export default testimonials_objects;