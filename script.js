// =============================
// DARK MODE
// =============================

function darkMode() {
    document.body.classList.toggle("dark");
}

// =============================
// BACK TO TOP BUTTON
// =============================

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.documentElement.scrollTop > 200) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

// =============================
// TOP FUNCTION
// =============================

function topFunction() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// =============================
// ACTIVE NAVIGATION
// =============================

const currentPage = window.location.pathname.split("/").pop();

const links = document.querySelectorAll("nav a");

links.forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

// =============================
// CARD ANIMATION
// =============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.8s";

    observer.observe(card);

});

// =============================
// PAGE LOADING EFFECT
// =============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});