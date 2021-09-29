function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
(function () {
    console.log(localStorage.getItem('theme'));
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById("mySwitch").checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById("mySwitch").checked = true;
    }
})();