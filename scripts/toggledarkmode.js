function toggleDarkMode() {
    let target = document.documentElement.classList;
    target.toggle('dark-mode');

    if (target.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

document.querySelector('.dark-mode-toggle').addEventListener('click', toggleDarkMode);