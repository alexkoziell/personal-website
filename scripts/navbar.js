function toggleDarkMode() {
    let target = document.documentElement.classList;
    target.toggle('dark-mode');

    if (target.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-toggle').addEventListener('click', () => {
        const toggle = document.querySelector('.nav-toggle').querySelector('i');
        toggle.classList.toggle('fa-x');
        toggle.classList.toggle('fa-bars');
        const nav = document.querySelector('.nav');
        nav.classList.toggle('nav-active'); // Toggle visibility of nav links
    });

    document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);
});