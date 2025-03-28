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
