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

// Task 4 - Display the products

function displayProducts(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    products.slice(0, 5).forEach(product => { //Loop through first 5 products
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
           <img src="${product.fields.image[0].url}" class="product-image">
           <h3 class="product name">${product.fields.name}</h3>
           <p class="product-price">$${product.fields.price / 100}</p> 
        `; //Create HTML elements
        container.appendChild(card); //Append to container
    });
};
