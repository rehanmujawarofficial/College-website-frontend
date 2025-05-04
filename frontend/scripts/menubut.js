var navLinks = document.getElementById("navLinks");
var menuBtn = document.getElementById("menuBtn");
function showmenu() {
    navLinks.style.right = "0";
}

function hidemenu() {
    navLinks.style.right = "-200px";
}
document.addEventListener("click", (event) => {
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
        hidemenu();
    }
});

window.addEventListener("scroll", () => {
    hidemenu();
});
