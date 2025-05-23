// script.js

const loginLink = document.getElementById('loginLink');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const registerLink = document.getElementById('registerLink');
const loginBackLink = document.getElementById('loginBackLink');
const modalContent = document.querySelector('.modal-content');

const userIcon = document.getElementById('profileLink');
const userInfoDropdown = document.getElementById('userInfoDropdown');
const dropdownUsername = document.getElementById('dropdownUsername');
const logoutDropdownLink = document.getElementById('logoutDropdownLink'); // تم تصحيح هذا السطر

const dropbtn = document.querySelector('.dropdownList > a');
const dropdownContent = document.querySelector('.dropdownList .dropdown-content');

const signInButton = document.getElementById('signinbtn');
const logEmailInput = document.getElementById('log-email');
const logPassInput = document.getElementById('log-pass');


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

console.log('Dropbtn element:', dropbtn);
console.log('Dropdown Content element:', dropdownContent);

if (!loginLink || !loginModal || !closeModal || !registerLink || !loginBackLink || !modalContent ||
    !userIcon || !userInfoDropdown || !dropdownUsername || !logoutDropdownLink) {
    console.error('One or more critical elements are missing in the HTML. Please check their IDs.');
    console.log({ loginLink, loginModal, closeModal, registerLink, loginBackLink, modalContent, userIcon, userInfoDropdown, dropdownUsername, logoutDropdownLink });
}

function updateUI() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');

    if (isLoggedIn) {
        if (loginLink) loginLink.style.display = 'none';
        if (userIcon) userIcon.style.display = 'block';

        if (dropdownUsername) {
            dropdownUsername.textContent = username || 'User';
        }
    } else {
        if (loginLink) loginLink.style.display = 'block';
        if (userIcon) userIcon.style.display = 'none';
        if (dropdownUsername) {
            dropdownUsername.textContent = 'Guest';
        }
        if (userInfoDropdown) userInfoDropdown.classList.remove('active');
    }
}

if (signInButton && logEmailInput && logPassInput) {
    signInButton.addEventListener('click', (event) => {
        event.preventDefault();

        const email = logEmailInput.value;
        const password = logPassInput.value;

        if (email === "test@example.com" && password === "123") {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', 'Guest');
            alert('You have logged in successfully');
            if (loginModal) loginModal.style.display = 'none';
            updateUI();
        } else {
            alert('Invalid email or password.');
        }
        logEmailInput.value = '';
        logPassInput.value = '';
    });
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
        alert('You have successfully logged out!')
        updateUI();
        if (userInfoDropdown) userInfoDropdown.classList.remove('active');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
});

if (loginLink && loginModal && modalContent) {
    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        loginModal.style.display = 'flex';
        modalContent.classList.remove('active');
        if (logEmailInput) logEmailInput.value = '';
        if (logPassInput) logPassInput.value = '';
    });
}

if (closeModal && loginModal && modalContent) {
    closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
        modalContent.classList.remove('active');
    });
}

if (loginModal && modalContent) {
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
            modalContent.classList.remove('active');
        }
    });
}

if (registerLink && modalContent) {
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        modalContent.classList.add('active');
    });
}

if (loginBackLink && modalContent) {
    loginBackLink.addEventListener('click', (event) => {
        event.preventDefault();
        modalContent.classList.remove('active');
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
