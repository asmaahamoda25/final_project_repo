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