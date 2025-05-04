
// Function to scroll to the top of the page
document.getElementById("scrollBtn").style.display = "none";

window.onscroll = function() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
