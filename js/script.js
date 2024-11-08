// GSAP Animations for smoother transitions
document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".hero-content", { opacity: 0, duration: 1, y: -50 });
    gsap.from(".profile-img", { opacity: 0, duration: 1, delay: 0.5, y: 50 });
    gsap.from(".btn", { opacity: 0, duration: 1, delay: 1, y: 50 });

    gsap.from(".section h2", { opacity: 0, duration: 1, delay: 1.5, x: -50 });
    gsap.from(".section p", { opacity: 0, duration: 1, delay: 2, x: 50 });

    // Dark mode toggle functionality
    const darkModeBtn = document.getElementById("dark-mode-btn");
    darkModeBtn.addEventListener("click", toggleDarkMode);

    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");
    }

    // Smooth Scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});











