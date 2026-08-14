/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    
    const icon = menuBtn.querySelector("i");
    
    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

/* CLOSE MENU AFTER CLICKING LINK */
document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.15 }
);

document
    .querySelectorAll(
        ".program-card, .department-card, .mission-card, .life-card, .feature-card"
    )
    .forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });

/* =========================
   SMOOTH SCROLLING
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
