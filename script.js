// Step 1: Connect HTML Elements

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const cartButton = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const categoryFilters = document.getElementById("category-Filters");
const productGrid = document.getElementById("productGrid");
const sortSelect = document.getElementById("sortSelect");


// Step 2: Initial Project Data

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1299,
        Categories: "electronics",
        rating: 4.5,
        image: "https://m.media-amazon.com/images/I/31818K7ii3L._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id: 2,
        name: "Bluetooth Speaker",
        price: 899,
        Categories: "electronics",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 1599,
        Categories: "electronics",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        id: 4,
        name: "Smartphone",
        price: 12999,
        Categories: "electronics",
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
        id: 5,
        name: "Running Shoes",
        price: 1999,
        Categories: "fashion",
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
    },
    {
        id: 6,
        name: "Classic Sunglasses",
        price: 699,
        Categories: "fashion",
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400"
    },
    {
        id: 7,
        name: "Laptop",
        price: 45999,
        Categories: "computer accessories",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
        id: 8,
        name: "Wireless Mouse",
        price: 499,
        Categories: "computer accessories",
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
    },
    {
        id: 9,
        name: "Table Lamp",
        price: 799,
        Categories: "home & living",
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400"
    },
    {
        id: 10,
        name: "Coffee Mug",
        price: 299,
        Categories: "home & living",
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400"
    }
];


// Step 3: Cart Data

const cart = [];


// Step 4: Helper Function To Escape HTML

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        };

        return entities[character];
    });
}


// Step 5: Render Products

function renderProducts(productList) {

    // Check if products are available

    if (productList.length === 0) {
        productGrid.innerHTML = `
            <div class="empty-message">
                <h3>No products found</h3>
                <p>Please check back later.</p>
            </div>
        `;

        return;
    }

    // Generate HTML for every product

    let productsHTML = "";

    productList.forEach(product => {
        productsHTML += `
            <article class="product-card">

                <div class="product-image">
                    <img
                        src="${escapeHTML(product.image)}"
                        alt="${escapeHTML(product.name)}"
                        style ="width: 100%; height: 100%; object-fit: cover;"
                        loading="lazy"
                    >

                    <span class="product-rating">
                        ${Number(product.rating).toFixed(1)}
                    </span>
                </div>

                <div>
                    <p class="products-category">
                        ${escapeHTML(product.Categories)}
                    </p>

                    <h3 class="product-name">
                        ${escapeHTML(product.name)}
                    </h3>

                    <div class="product-bottom">
                        <span class="product-price">
                            ₹${Number(product.price).toLocaleString("en-IN")}
                        </span>

                        <button
                            class="add-to-cart-btn"
                            type="button"
                            data-product-id="${Number(product.id)}"
                            disabled
                            title="Cart Functionality coming on Day 6"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>

            </article>
        `;
    });

    productGrid.innerHTML = productsHTML;
}


// Step 6: Check HTML Connections

console.log("EcomStore connected");
console.log("Search Input:", searchInput);
console.log("Category Filters:", categoryFilters);
console.log("Product Grid:", productGrid);
console.log("Sort Select:", sortSelect);
console.log("Products:", products);
console.log("Cart:", cart);


// Step 7: Display Products

renderProducts(products);


// Search Function


 // Search Function
function searchProduct() {

    // Step 1: Get search input
    const searchTerm = searchInput.value
        .toLowerCase()
        .trim();

    // Step 2: Filter matching products
    const filteredProducts = products.filter(product => {
        return product.name
            .toLowerCase()
            .includes(searchTerm);
    });

    // Step 3: Display filtered products
    renderProducts(filteredProducts);

    // Step 4: Show results in console
    console.log("Search term:", searchTerm);
    console.log("Matching products:", filteredProducts.length);
}

// Search button click
searchBtn.addEventListener("click", searchProduct);

// Search while typing
searchInput.addEventListener("input", searchProduct);

// Search on Enter key
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchProduct();
    }
});

//Apply filter 

let selectedCategory ="all"


function applyFilters(){

    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()

    //search filter

    let filteredProducts  = products.filter(product =>{

        return product.name 
        .toLowerCase()
        .trim()

    })

    //category filter

    if (selectedCategory   !== "all"){

        filteredProducts = filteredProducts.filter(product =>{
            return product.category === selectedCategory
        })
    }

    //sorting

    const sortValue = sortSelect.value
    if (sortValue === "price-low"){
        filteredProducts.sort((a,b) =>a.price - b.price)

    }else if(sortValue === "price-high"){
        filteredProducts.sort((a,b) =>b.price - a.price)
    }else if(sortValue === "rating"){
        filteredProducts.sort((a,b) =>b.rating - a.rating)

    }

    // update webpage
    renderProducts(filteredProducts)

    //console output
    console.log("Category :" , selectedCategory)
    console.log("Search :" , searchTerm)
    console.log("Sort :" , sortValue)
    console.log("MAtching Products ", filteredProducts.length)
}

//search while typing
searchInput.addEventListener("input", applyFilters)

//search button click
searchBtn.addEventListener("click", applyFilters)

//press enter
searchInput.addEventListener("keydown" , function(event){
    if(event.key === "Enter") {
        applyFilters()
    }
})

//category button 
categoryFilters.addEventListener("click" , function(event){
    const button = event.target.closest("button[data-category]")
    if (!button) return 
    selectedCategory= button.dataset.category
        applyFilters()
    }
)

sortSelect.addEventListener("change" , applyFilters)