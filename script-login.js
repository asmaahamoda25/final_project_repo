// script-login.js

const loginModal = document.getElementById('loginModal');
const modalContent = document.querySelector('.modal-content');

const registerLink = document.getElementById('registerLink');
const loginBackLink = document.getElementById('loginBackLink');

const signInButton = document.getElementById('signinbtn');
const logEmailInput = document.getElementById('log-email');
const logPassInput = document.getElementById('log-pass');

const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const titleLogin = document.querySelector('.title-login');
const titleRegister = document.querySelector('.title-register');

// لوجيك تسجيل الدخول
if (signInButton && logEmailInput && logPassInput) {
    signInButton.addEventListener('click', (event) => {
        event.preventDefault();

        const email = logEmailInput.value;
        const password = logPassInput.value;

        if (email === "test@example.com" && password === "123") {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('username', 'DemoUser'); 
            alert('تم تسجيل الدخول بنجاح!');
            window.location.href = 'index.html'; // هنا يتم التوجيه للصفحة الرئيسية
        } else {
            alert('بريد إلكتروني أو كلمة مرور غير صحيحة.');
        }
        logEmailInput.value = '';
        logPassInput.value = '';
    });
}

// لوجيك التبديل بين نماذج تسجيل الدخول والتسجيل
if (registerLink && modalContent) {
    registerLink.addEventListener('click', (event) => {
        event.preventDefault();
        modalContent.classList.add('active');
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        titleLogin.classList.remove('active');
        titleRegister.classList.add('active');
    });
}

if (loginBackLink && modalContent) {
    loginBackLink.addEventListener('click', (event) => {
        event.preventDefault();
        modalContent.classList.remove('active');
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        titleRegister.classList.remove('active');
        titleLogin.classList.add('active');
    });
}

// عند تحميل الصفحة، تأكد من إظهار نموذج تسجيل الدخول أولًا
document.addEventListener('DOMContentLoaded', () => {
    if (loginForm && registerForm) {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        titleLogin.classList.add('active');
        titleRegister.classList.remove('active');
    }
});