let productsData = [
    {
        name: 'Chanel',
        type: "No. 5 Eau de Parfum",
        category: 'Fragrance',
        price: 150,
        imgSrc: "images/Chanel.jpeg",
        isImported: true,
        origin: 'France'
    },
    {
        name: 'Dior',
        type: "Sauvage",
        category: 'Fragrance',
        price: 110,
        imgSrc: "images/dior.jpeg",
        isImported: true,
        origin: 'France'
    },
    {
        name: 'Versace',
        type: "Eros",
        category: 'Fragrance',
        price: 90,
        imgSrc: "images/Versace Eros.jpeg",
        isImported: true,
        origin: 'Italy'
    },
    {
        name: 'Scentology',
        type: "Royal Oud",
        category: 'Fragrance',
        price: 25,
        imgSrc: "images/Scentology Royal Oud.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Junaid Jamshed',
        type: "JJ Musk",
        category: 'Fragrance',
        price: 20,
        imgSrc: "images/Junaid Jamshed JJ Musk.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Attar',
        type: "Mitti",
        category: 'Fragrance',
        price: 15,
        imgSrc: "images/Attar Mitti.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Borjan',
        type: "Leather Cologne",
        category: 'Fragrance',
        price: 18,
        imgSrc: "images/Borjan Leather Cologne.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Rolex',
        type: "Submariner",
        category: 'Watch',
        price: 10000,
        imgSrc: "images/Rolex Submariner watch.jpeg",
        isImported: true,
        origin: 'Switzerland'
    },
    {
        name: 'Omega',
        type: "Seamaster",
        category: 'Watch',
        price: 5000,
        imgSrc: "images/Omega Seamaster watch.jpeg",
        isImported: true,
        origin: 'Switzerland'
    },
    {
        name: 'Casio',
        type: "G-Shock",
        category: 'Watch',
        price: 100,
        imgSrc: "images/Casio G-Shock watch.jpeg",
        isImported: true,
        origin: 'Japan'
    },
    {
        name: 'J.',
        type: "Classic Chrono",
        category: 'Watch',
        price: 120,
        imgSrc: "images/J. Classic Chrono watch.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'D.Watch',
        type: "Minimalist",
        category: 'Watch',
        price: 60,
        imgSrc: "images/D.Watch Minimalist wtach.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Titan',
        type: "Raga",
        category: 'Watch',
        price: 80,
        imgSrc: "images/Titan Raga watch.jpeg",
        isImported: false,
        origin: 'India'
    },
    {
        name: 'Orient',
        type: "Bambino",
        category: 'Watch',
        price: 200,
        imgSrc: "images/Orient Bambino watch.jpeg",
        isImported: true,
        origin: 'Pakistan'
    },
    {
        name: 'Nike',
        type: "Air Jordan Hoodie",
        category: 'Clothing',
        price: 80,
        imgSrc: "images/Nike Air Jordan Hoodie cloth.jpeg",
        isImported: true,
        origin: 'USA'
    },
    {
        name: 'Zara',
        type: "Denim Jacket",
        category: 'Clothing',
        price: 70,
        imgSrc: "images/Zara Denim Jacket cloth.jpeg",
        isImported: true,
        origin: 'Spain'
    },
    {
        name: 'Adidas',
        type: "Trefoil T-Shirt",
        category: 'Clothing',
        price: 35,
        imgSrc: "images/Adidas Trefoil T-Shirt Cloth.jpeg",
        isImported: true,
        origin: 'Germany'
    },
    {
        name: 'Khaadi',
        type: "Embroidered Kurta",
        category: 'Clothing',
        price: 45,
        imgSrc: "images/Khaadi Embroidered Kurta cloth.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Bonanza',
        type: "Formal Shirt",
        category: 'Clothing',
        price: 25,
        imgSrc: "images/Bonanza Formal Shirt Cloth.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'Gul Ahmed',
        type: "Linen Shirt",
        category: 'Clothing',
        price: 30,
        imgSrc: "images/Gul Ahmed Linen Shirt cloth.jpeg",
        isImported: false,
        origin: 'Pakistan'
    },
    {
        name: 'ChenOne',
        type: "Woolen Shawl",
        category: 'Clothing',
        price: 35,
        imgSrc: "images/ChenOne Woolen Shawl cloth.jpeg",
        isImported: false,
        origin: 'Pakistan'
    }
];

let productsEl = document.querySelector(".Products-list-container");
listProducts(productsData);
function listProducts(products) {
    productsEl.innerHTML = ""; 
    for (let i = 0; i < products.length; i++) {
        let productCard = makeProductCard(products[i]);
        productsEl.innerHTML += productCard;
    }
}

function makeProductCard(product) {
    return `
        <div class="product-card">
            ${product.isImported ? '<span class="imported">IMPORTED</span>' : ''}
            <img src="${product.imgSrc}" alt="${product.name} ${product.type}"/>
            <h2>${product.name} ${product.type}</h2>
            <p class="price">$${product.price.toLocaleString()}</p>
            <p>Category: ${product.category}</p>
            <span class="origin">From: ${product.origin}</span>
        </div>
    `;
}
function filterProducts(el) {
    let filteredProducts = [];
    
    for (let i = 0; i < productsData.length; i++) {
        if (el.value === 'Imported' && productsData[i].isImported) {
            filteredProducts.push(productsData[i]);
        }
        else if (el.value === 'Pakistani' && !productsData[i].isImported) {
            filteredProducts.push(productsData[i]);
        }
    }
    
    if (el.value === 'All') {
        filteredProducts = productsData.slice(0);
    }

    listProducts(filteredProducts);
}
function filterProductsCategory(el) {
    let filteredProductscat = [];
    
    for (let i = 0; i < productsData.length; i++) {
        if (el.value === 'Fragnance' && productsData[i].category === 'Fragrance') {
            filteredProductscat.push(productsData[i]);
        }
        else if (el.value === 'Clothing' && productsData[i].category === 'Clothing') {
            filteredProductscat.push(productsData[i]);
        }
        else if(el.value === 'Watch' && productsData[i].category === 'Watch'){
            filteredProductscat.push(productsData[i]);
        }
    }
    
    if (el.value === 'All') {
        filteredProductscat = productsData.slice(0);
    }

    listProducts(filteredProductscat);
}