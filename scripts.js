document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Sticky Header Change Color on Scroll
    const header = document.querySelector(".sticky-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("fixed-header");
        } else {
            header.classList.remove("fixed-header");
        }
    });

    // Fade-in Animation on Scroll
    const fadeInElements = document.querySelectorAll(".fade-in, .about-section, .services-section, .testimonials-section, .contact-section");
    const fadeInOptions = {
        threshold: 0.2
    };

    const fadeInOnScroll = new IntersectionObserver((entries, fadeInOnScroll) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                fadeInOnScroll.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    fadeInElements.forEach(element => {
        fadeInOnScroll.observe(element);
    });

    // Automatic Testimonials Slider
    let slideIndex = 0;
    function showSlides() {
        const slides = document.querySelectorAll(".testimonial-card");
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Change slide every 5 seconds
    }
    showSlides();
});
