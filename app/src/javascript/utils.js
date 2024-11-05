// Function to close the current page and navigate to the home page
export function closePage(navigate) {
    const images = document.querySelectorAll(".image"); // Selecting all elements with the class "image"

    // Removing expansion classes from all image elements
    images.forEach((element, index) => {
        element.classList.remove("expand", `expand_${index}`);
    });

    // Navigating to the home page after a brief delay
    setTimeout(() => {
        navigate(`/`);
    }, 200);
}

 // Function to open the selected product's page
 export function openPage(e, index, navigate) {
    const images = document.querySelectorAll(".image"); // Selecting all elements with the class "image"

    // Removing expand classes from all image elements
    images.forEach((element, idx) => {
        element.classList.remove("expand", `expand_${idx}`);
    });

    // Adding expand classes to the clicked image element
    e.currentTarget.classList.add("expand", `expand_${index}`);

    // Navigating to the product page after a 2-second delay
    setTimeout(() => {
        navigate(`/product/${index}/tinyhome`);
    }, 2000);
};