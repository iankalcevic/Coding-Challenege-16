// Task 2 - Fetch products with .then()

function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products') //Use fetch to get product data
    .then(response => {
        if (!response.ok) throw new Error('Error: ${reponse.status}');
        return response.json();
    });
    .then(data => console.log("Products (using,then);", data)) //Log each product to console
    .catch(error => handleError(error)); //Log any errors
};

// Task 3 - Fetch products using async/await

async function fetchProductsAsync() {
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products'); //Fetch product data
        if (!response.ok) throw new Error('Error: ${response.status}');
        const data = await response.json();
        displayProducts(data); //Render products to page
    } catch (error) {
        handleError(error); //Error occurs
    };
};
