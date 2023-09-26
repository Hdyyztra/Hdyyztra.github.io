// 
const navbarNav = document.querySelector('.navbar-nav-active');

// ketika hamburger menu di click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
