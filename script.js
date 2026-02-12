// Header escurece ao rolar
window.addEventListener("scroll", function() {
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

// Menu hamburger
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function() {
        this.classList.toggle("active");
        mobileNav.style.display = mobileNav.style.display === "flex" ? "none" : "flex";
        
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
    });

    // Fecha o menu ao clicar em um link
    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileNav.style.display = "none";
            hamburger.setAttribute("aria-expanded", "false");
        });
    });
}

// Contadores com GSAP
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");

        gsap.fromTo(counter, 
            { innerHTML: 0 }, 
            {
                innerHTML: target,
                duration: 2.2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                onUpdate: function () {
                    counter.innerHTML = Math.floor(counter.innerHTML);
                }
            }
        );
    });
});