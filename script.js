// step 1 
// select important HTML Elements

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const cartButton = document.getElementById("cartButton")
const cartCount = document.getElementById("cartCount")
const categoryFilters = document.getElementById("categoryFilters")
const productGrid = document.getElementById("productGrid")
const sortSelect = document.getElementById("sortSelect")




// Product modal ke liye javascript
const productModal = document.getElementById("productModal")
const productDetails = document.getElementById("productDetails")
const closeModal = document.getElementById("closeModal")




// step 2 
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

const cart = []

// helper function to escAPE HTML

function escapeHTML(value) {
 return String(value).replace(/[&<>"']/g,character => {
    // const entities = {
    //     // "&": "&amp",
    //     // "<": "&lt",
    //     // ">": "&gt",
    //     // '"': "&qout",
    //     // "'": "&#39"
    // }
    return entities[character]
 })

}

// Render Products

function renderProducts(productList) {
    // empty data check
    if(productList.length === 0) {
        productGrid.innerHTML = `
        <div class = "empty-message">
        <h3>No Product Data Found </h3>
        <p>Please check back later </p>

        </div>
        ` 
        return
    }

    // generates HTML For Every product

    let productsHTML = ""

    productList.forEach(product => {
        productsHTML += `
        <article class ="product-card">

        <div class="product-image">
        <img
           src="${escapeHTML(product.image)}"
           alt="${escapeHTML(product.name)}"
           style="width:100%; height:200px; object-fit: contain"
           loading="lazy"
        >
        <span class="product-rating">
        ${Number(product.rating).toFixed(1)}
        </span>
        </div>

        <div> 

        <p class="product-category"> 
        ${escapeHTML(product.category)}
        </p>

        <h3 class="product-name">
        ${escapeHTML(product.name)}
        </h3>

        <div class="product-bottom">

        <span class="product-price"> 
        ₹${Number(product.price).toLocaleString("en-IN")}
        </span>

        <button
        class="view-details-btn"
        data-product-id="${product.id}"
        >

        View Details
        </button>

        <button
        class="add-to-cart-btn"
        type="button"
        data-product-id="${Number(product.id)}"
        
        title="Cart funntionality coming on Day 6"
        >
        Add to cart
        </button>
        </div>
        </div>
        </article>
        `
    })

    productGrid.innerHTML = productsHTML



}

renderProducts(products)



// Search Function

function SearchProduct() {

    //step 1 : get search input
    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()


    // step 2 : filter matching products

    const filteredProducts = products.filter(product => {
        return product.name
               .toLowerCase()
               .includes(searchTerm)
    })

    // step 3 : Render Matching products

    renderProducts(filteredProducts)

// step 4 : show result in console  

console.log("Search term :",searchTerm)
console.log("matching Products :",filteredProducts.length)

}


// search button click

searchBtn.addEventListener("click",SearchProduct)

// search while typing

searchInput.addEventListener("input" , SearchProduct)

searchInput.addEventListener("keydown" , function(event) {
    if(event.key === "Enter") {
        SearchProduct()

    }
})




// Apply Filters

let selectedCategory = "all"


function applyFilters() {

    const searchTerm = searchInput.value
    .toLowerCase()
    .trim()


    // search filter
    let filteredProducts = products.filter(product => {
        return product.name
        .toLowerCase()
        .trim()
    })

    // category filter

    if(selectedCategory !== "all") {

        filteredProducts = filteredProducts.filter(product => {
            return product.category === selectedCategory
        })

    }

    // sorting

    const sortValue = sortSelect.value

    if(sortValue === "price-low") {
        filteredProducts.sort((a,b) => a.price - b.price)

    } else if (sortValue === "price-high") {
        filteredProducts.sort((a,b) => b.price - a.price)
    } else if (sortValue === "rating") {
        filteredProducts.sort((a,b) => b.rating - a.rating)
    }



    // update webpage
    renderProducts(filteredProducts)

    // console output

    console.log("Category :" , selectedCategory)
    console.log("Search :" , searchTerm)
    console.log("Sort ",sortValue)
    console.log("Matchig Products ",filteredProducts.length)

}

// search while typing
searchInput.addEventListener("input",applyFilters)

// search button click
searchBtn.addEventListener("click",applyFilters)

// press enter
searchInput.addEventListener("keydown" , function(event) {
    if(event.key === "Enter") {
        applyFilters()
    }
})


// category button

categoryFilters.addEventListener("click",function(event) {
    const button = event.target.closest("button[data-category]")

    if (!button) return
    selectedCategory = button.dataset.category

    applyFilters()
})

sortSelect.addEventListener("change" , applyFilters)







// Producat modal kaa function

function openProductModal(productId) {

    const product = products.find(item => {
        return String(item.id) === (productId)
    })

    if(!product) {
        console.log("Product Not found ",productId)
        return
    }


    productDetails.innerHTML = `

    <img
        class="modal-product-image"
        src="${escapeHTML(product.image)}"
        alt="${product.name}"
    >

    <h2 class="modal-product-name">
        ${escapeHTML(product.name)}
    </h2>

    <p> 
    Category: ${escapeHTML(product.category)}
    </p>
    <p> 
    Rating: ${escapeHTML(product.rating)}
    </p>
    <p class="modal-product-price"> 
        ₹${Number(product.price).toLocaleString("en-IN")}
    </p>

    <p class="modal-product-description"> 
        ${escapeHTML(
            product.name || 
            "Discover product at EcomStore"
        )}
    </p>

   `
   productModal.classList.remove("hidden")
   console.log("selected product :",product)

}

// handle clicks for view details  button

productGrid.addEventListener("click" , function(event) {
    const button = event.target.closest(".view-details-btn")
    if(!button) return

    const productId = button.dataset.productId
    openProductModal(productId)
})


// close modal using X button
closeModal.addEventListener("click" , function() {
    productModal.classList.add("hidden")
})

// close modal when clicking outside the content 

productModal.addEventListener("click" , function(event) {
    if(event.target === productModal) {
        productModal.classList.add("hidden")
    }
})

// close modal with escape key

document.addEventListener("keydown", function(event) {
    if(event.key === "Escape") {
        productModal.classList.add("hidden")
    }
})







//Shopping Cart Functionality Javascript

// const cartButton = document.getElementById("cartButton")

const cartModal = document.getElementById("cartModal")
const closeCart = document.getElementById("closeCart")
const cartItemsContainer = document.getElementById("cartItems")
const cartTotal = document.getElementById("cartTotal")
const clearCartButton = document.getElementById("clearCart")

// cart data

// const cart = []

// Add product to cart

function addTocart(productId) {
    const product = products.find(item => {
        return String(item.id) === String(productId)
    })

    if(!product) return

    const existingItem = cart.find(item => {
        return String(item.id) === String(productId)
    })

    if(existingItem) {
        existingItem.quantity++
    } else {
        cart.push({
            ...product,
            quantity: 1
        })
    }

    updateCart()
}


//update cart



function updateCart() {
    const totaItems = cart.reduce(
        (total,item) => total + item.quantity,
        0
    )

    cartCount.textContent = totaItems

    cartItemsContainer.innerHTML = ""

    if(cart.length === 0) {
        cartItemsContainer.textContent = "Your Cart Is Empty. "
    }

    let totalPrice = 0

    cart.forEach(item => {
        totalPrice += item.price * item.quantity

        const cartItem = document.createElement("div")
        cartItem.className = "cart-item"

        const name = document.createElement("h4")
        name.textContent = item.name

        const price = document.createElement("p")
        price.textContent = 
        `₹${item.price.toLocaleString("en-IN")} * ${item.quantity}`

        const decreaseButton = document.createElement("button")
        decreaseButton.textContent ="-"
        decreaseButton.dataset.action = "decrease"
        decreaseButton.dataset.productId = item.id

        const quantity = document.createElement("span")
        quantity.textContent = `${item.quantity}`

        const increaseButton = document.createElement("button")
        increaseButton.textContent ="+"
        increaseButton.dataset.action = "increase"
        increaseButton.dataset.productId = item.id

        const removeButton = document.createElement("button")
        removeButton.textContent = "Remove"
        removeButton.dataset.action = "remove"
        removeButton.dataset.productId = item.id


        cartItem.append(
            name,
            price,
            decreaseButton,
            quantity,
            increaseButton,
            removeButton
        )

        cartItemsContainer.appendChild(cartItem)
    })
    cartTotal.textContent = 
    `Total: ₹${totalPrice.toLocaleString("en-IN")}`
}
// Listen for add to cart

productGrid.addEventListener("click" , function(event) {
    const button = event.target.closest(".add-to-cart-btn")
    if(!button) return
    addTocart(button.dataset.productId)
})

// Open Cart
cartButton.addEventListener("click" , function() {
    cartModal.classList.remove("hidden")
    updateCart()
})

// close cart

closeCart.addEventListener("click" , function() {
    cartModal.classList.add("hidden")
})

//increase , decrease and remove product

cartItemsContainer.addEventListener("click" , function(event){
    const button = event.target.closest("button[data-action]")

    if(!button) return

    const productId = button.dataset.productId
    const action = button.dataset.action

    const itemIndex = cart.findIndex(item => String(item.id) === String(productId))

    if(itemIndex === -1) return

    if (action === "increase") {
        cart[itemIndex].quantity++
    }

    if(action === "decrease") {
        cart[itemIndex].quantity--

        if(cart[itemIndex].quantity <= 0){
            cart.splice(itemIndex,1)
        }
    }
if(action === "remove") {
    cart.splice(itemIndex,1)
}
updateCart()

})

// clear complete cart

clearCartButton.addEventListener("click" , function() {
    cart.length = 0
    updateCart()
})

// initial cart display

updateCart()