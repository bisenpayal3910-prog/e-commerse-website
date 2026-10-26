//step 1
//select important html elements

const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
const cartButton = document.getElementById("cartBtn")
const cartCount = document.getElementById("cartCount")
const categoryFilters = document.getElementById("categoryFilters")
const productGrid = document.getElementById("productGrid")
const sortSelect = document.getElementById("sortSelect")

//step 2
//Initial project data

const products = [
    {
      id:1,
      name:"Wireless Headphones",
      price : 1499 ,
      category : "electronics",
      rating:4.5,
      image:"https://images.unsplash.com/photo-1585386959984-a415522c1f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60"
    },

    {
      id:2,
      name:"Smart Watch",
      price : 2999 ,
      category : "electronics",
      rating:4.0,
      image:"https://images.unsplash.com/photo-1523275335684-37898b6769a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQld2F0Y2h8ZW58MHx8MHx8fDE2NzkyMzQyMzU=&auto=format&fit=crop&w=500&q=60"
    },

    {
      id:3,
      name:"television",
      price : 14999 ,
      category : "electronics",
      rating:4.5,
      image:"https://images.unsplash.com/photo-1616628180680-1e3f5c8b6f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60"
    },

    {
      id:4,
      name:"Laptop",
      price : 55999 ,
      category : "electronics",
      rating:4.5,
      image:"https://images.unsplash.com/photo-1493246507139-916f3c187c96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9ufGVufDB8fDB8fHwxNjc5MjM0MjM1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id:5,
      name:"tshirt",
      price : 499 ,
      category : "fashion",
      rating:4.5,
      image:"https://images.unsplash.com/photo-1618354691740-1e3f5c8b6f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVsZXZpc2lvbnxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60"
    },

    {
      id:6,
      name:"tops",
      price : 299 ,
      category : "fashion",
      rating:4.5,
      image:"https://images.unsplash.com/photo-1585386959984-a415522c1f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60"
    },
]
const cart = []

//Render products

function renderProducts(productList){
    //empty data check
    if(productList.length === 0){
        productGrid.innerHTML = `
        <div class ="empty-message">
        <h3>No Product data Found</h3>
        <p>Please check back later </p>
        </div>
        `
        return
    }

    //generate html for every product
    let productsHTML = ""
    productList.forEach(product => {
        productsHTML += `
        <article class ="product-card">
        <div class ="product-image>
         <img
         src = "${escapeHTML(product.image)}" 
         alt= "${escapeHTML(product.name)} 
         loading ="lazy">

         <span class = "product-rating">${Number(product.rating).toFixed(1)}</span>
        </div>
        </article>        `
    })
}

//step 3
//check if elements are connected correctly

console.log("EcomStore Connected")
console.log("Search Input ", searchInput)
console.log("Product Grid", productGrid)
console.log("products",products)
console.log("Cart",cart)

