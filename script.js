// Header escurece ao rolar
window.addEventListener("scroll", function() {
    document.querySelector("header")
        .classList.toggle("scrolled", window.scrollY > 50);
});

// Espera o DOM carregar
window.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        gsap.fromTo(counter, 
            { innerHTML: 0 }, 
            {
                innerHTML: target,
                duration: 2,
                ease: "power1.out",
                snap: { innerHTML: 1 },
                onUpdate: function () {
                    counter.innerHTML = Math.floor(counter.innerHTML);
                }
            }
        );

    });

});