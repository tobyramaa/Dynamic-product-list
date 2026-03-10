const products = [
    {
        id: 1,
        name: "Laptop", 
        category: "electronics",
        price: 500000
    },

    {
        id: 2,
        name: "Headphones",
        category: "electronics",
        price: 80000
        
    },
    {
        id: 3,
        name: "Smartphone",
        category: "electronics",
        price: 350000
    },

    {
        id: 4,
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 65000
    },

    {
        id: 5,
        name: "T-shirt",
        category: "fashion",
        price: 15000       
    },

    {
        id: 6,
        name: "Sneakers",
        category: "fashion",
        price: 75000
    },

    {
        id: 7,
        name: "Jeans",
        category: "fashion",
        price: 35000
    },

    {
        id: 8,
        name: "Hoodie",
        category: "fashion",
        price: 45000
    },

    {
        id: 9,
        name: "Rice Bag",
        category: "groceries",
        price: 95000
    },

    {
        id: 10,
        name: "Bread",
        category: "groceries",
        price: 1500
    },

    {
        id: 11,
        name: "Milk",
        category: "groceries",
        price: 3000
    },

    {
        id: 12,
        name: "Cooking Oil",
        category: "groceries",
        price: 12000
    }
];


const container = document.getElementById("productContainer")
const totalPrice = document.getElementById("totalPrice")
const searchInput = document.getElementById("search")
const buttons = document.querySelectorAll(".filter-btn");

let currentCategory = "all";

function displayProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        (currentCategory === "all" || product.category === currentCategory)).filter(product => product.name.toLowerCase().includes(searchValue));

        container.innerHTML = filteredProducts.map(product => 
            `
            <div class="bg-teal-50 h-30 shadow-lg rounded-xl p-4 transform duration-500 scale-90 opacity-0 hover:scale-105 transition">
            <h3 class="text-lg font-bold">${product.name}</h3>
            <p class="text-gray-600 pt-10">₦${Number(product.price).toLocaleString()}</p>
            </div>

            
            
            `
        ).join("")
const cards = container.querySelectorAll("div"); // select all product cards
cards.forEach(card => {
    requestAnimationFrame(() => {
        card.classList.remove("scale-90", "opacity-0");
        card.classList.add("scale-100", "opacity-100");
    });
});

const total = filteredProducts.reduce((sum, product) => sum + product.price, 0)
totalPrice.textContent = total;


}
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => {
            b.classList.remove("bg-teal-500", "text-white");
        })
        btn.classList.add("bg-teal-500", "text-white")
        currentCategory = btn.dataset.category;
        displayProducts()
    }) 
})
searchInput.addEventListener("input", displayProducts)

displayProducts()