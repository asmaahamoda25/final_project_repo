// script.js 

document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        window.location.href = 'login.html';
        return; 
    }

    
    updateUI();
});


// Initialize Swiper 
const swiper = new Swiper('.mySwiper', {

    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    slidesPerView: 1, // العدد الافتراضي للكاردز اللي هتظهر في الشاشات الصغيرة
    spaceBetween: 10, // المسافة بين الكاردز

    // Responsive breakpoints
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});

const userIcon = document.getElementById('profileLink');
const userInfoDropdown = document.getElementById('userInfoDropdown');
const dropdownUsername = document.getElementById('dropdownUsername');
const logoutDropdownLink = document.getElementById('logoutDropdownLink');

const dropbtn = document.querySelector('.dropdownList > a');
const dropdownContent = document.querySelector('.dropdownList .dropdown-content');


console.log('Dropbtn element:', dropbtn);
console.log('Dropdown Content element:', dropdownContent);

if (!userIcon || !userInfoDropdown || !dropdownUsername || !logoutDropdownLink) {
    console.error('One or more critical UI elements are missing in the HTML for index.html. Please check their IDs.');
    console.log({ userIcon, userInfoDropdown, dropdownUsername, logoutDropdownLink });
}

function updateUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    const loginLinkInNavbar = document.getElementById('loginLink');

    if (isLoggedIn) {
        if (loginLinkInNavbar) loginLinkInNavbar.style.display = 'none';
        if (userIcon) userIcon.style.display = 'block';

        if (dropdownUsername) {
            dropdownUsername.textContent = username || 'User';
        }
    } else {
        if (loginLinkInNavbar) loginLinkInNavbar.style.display = 'block';
        if (userIcon) userIcon.style.display = 'none';
        if (dropdownUsername) {
            dropdownUsername.textContent = 'Guest';
        }
        if (userInfoDropdown) userInfoDropdown.classList.remove('active');
    }
}


if (userIcon && userInfoDropdown) {
    userIcon.addEventListener('click', function (event) {
        event.preventDefault();
        userInfoDropdown.classList.toggle('active');
    });

    document.addEventListener('click', function (event) {
        if (!userIcon.contains(event.target) && !userInfoDropdown.contains(event.target)) {
            userInfoDropdown.classList.remove('active');
        }
    });
}

if (logoutDropdownLink) {
    logoutDropdownLink.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        alert('You have successfully logged out!');
        window.location.href = 'login.html';
        updateUI(); // هذا السطر قد لا ينفذ بسبب إعادة التوجيه الفورية
        if (userInfoDropdown) userInfoDropdown.classList.remove('active');
    });
}


const sr = ScrollReveal ({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    reset: true
});

sr.reveal('.main-content-box h1', { delay: 200 });
sr.reveal('.main-content-box p', { delay: 400 });
sr.reveal('.shop-now', { delay: 600 });
sr.reveal('.side-image', { origin: 'top', distance: '60px', delay: 800 });
sr.reveal('.contact-sections-container',{origin:'screenLeft',delay:300});

if (dropbtn && dropdownContent) {
    dropbtn.addEventListener('click', function(event) {
        event.preventDefault();
        dropdownContent.classList.toggle('active');
    });
}

window.addEventListener('click', function(event) {
    if (dropdownContent && !event.target.matches('.dropdownList > a') && !event.target.closest('.dropdown-content')) {
        if (dropdownContent.classList.contains('active')) {
            dropdownContent.classList.remove('active');
        }
    }
});


//products js
const productsData = [
    {
        "id": "101",
        "name": "Elegant Necklace",
        "image": "/n.webp", 
        "description": "A stunning necklace crafted with precision and brilliance, perfect for adding a touch of elegance to any outfit.",
        "price": "549.99$",
        "material": "Sterling Silver, Zircon",
        "weight": "20g"
    },
    {
        "id": "102",
        "name": "Elegant Diamond Necklace",
        "image": "/CZSET355_1.webp", 
        "description": "A stunning diamond necklace designed for ultimate sophistication and sparkle, perfect for special occasions.",
        "price": "1999.99$",
        "material": "White Gold, Diamonds",
        "weight": "35g"
    },
    {
        "id": "103",
        "name": "Silver Bracelet",
        "image": "/2023-06-17_3_copy_1445x edited.jpg", 
        "description": "A beautiful silver bracelet, exquisitely designed to enhance your wrist with its subtle glow and intricate details.",
        "price": "299.99$",
        "material": "925 Sterling Silver",
        "weight": "18g"
    },
    {
        "id": "104",
        "name": "Elegant Gold Bracelet",
        "image": "/jewelove-18k-gold-white-fancy-natural-yellow-diamond-bracelet-jl-aub-101-41673147318513.jpg", 
        "description": "A luxurious golden bracelet, a timeless piece that blends classic design with modern elegance.",
        "price": "1499.99$",
        "material": "18K Gold",
        "weight": "40g"
    },
    {
        "id": "105",
        "name": "Elegant Diamond Ring",
        "image": "/platinum-double-halo-oval-diamond-ring-071-077-f-si1.jpg", 
        "description": "A breathtaking diamond ring, symbolizing everlasting love and commitment, crafted with exceptional brilliance.",
        "price": "3999.99$",
        "material": "Platinum, Diamond",
        "carat": "1.5 Carat"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    const productMaterial = document.getElementById('product-material');
    const productWeight = document.getElementById('product-weight');
    const productCarat = document.getElementById('product-carat');
    const productDetailsContainer = document.querySelector('.product-details-container');


    if (productId) {
        const product = productsData.find(p => p.id === productId);

        if (product) {
            productImage.src = product.image;
            productName.textContent = product.name;
            productPrice.textContent = product.price;
            productDescription.textContent = product.description;

            if (product.material) {
                productMaterial.innerHTML = `<strong>Material:</strong> ${product.material}`;
            } else {
                productMaterial.style.display = 'none';
            }

            if (product.weight) {
                productWeight.innerHTML = `<strong>Weight:</strong> ${product.weight}`;
            } else {
                productWeight.style.display = 'none';
            }

            if (product.carat) {
                productCarat.innerHTML = `<strong>Carat:</strong> ${product.carat}`;
            } else {
                productCarat.style.display = 'none';
            }

        } else {
            productDetailsContainer.innerHTML = `
                <h2>Product Not Found</h2>
                <p>The product you are looking for does not exist.</p>
                <a href="index.html#myproducts" class="back-button">Back to Products</a>
            `;
        }
    } else {

        productDetailsContainer.innerHTML = `
            <h2>No Product ID Provided</h2>
            <p>Please select a product from the <a href="index.html#myproducts">products list</a>.</p>
        `;
    }
});