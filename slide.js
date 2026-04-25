document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide'); // Selecciona todos los slides
    const dots = document.querySelectorAll('.dot'); // Selecciona los puntos de navegación
    const prevButton = document.querySelector('.arrow.prev'); // Botón anterior
    const nextButton = document.querySelector('.arrow.next'); // Botón siguiente
    let currentSlide = 0;
    let interval;

    // Verificar que los elementos existen antes de proceder
    if (slides.length === 0 || dots.length === 0 || !prevButton || !nextButton) {
        console.error("Error: No se encontraron elementos del slider o botones de navegación.");
        return;
    }

    function showSlide(index) {
        if (slides.length === 0) return;

        currentSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (dots[i]) dots[i].classList.remove("active");
        });

        slides[currentSlide].classList.add("active");
        if (dots[currentSlide]) dots[currentSlide].classList.add("active");
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function goToSlide(index) {
        stopSlider();
        showSlide(index);
        startSlider();
    }

    function startSlider() {
        console.log("Slider automático iniciado");
        interval = setInterval(nextSlide, 3000);
    }

    function stopSlider() {
        clearInterval(interval);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Solo asignar eventos si los botones existen
    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    } else {
        console.error("Error: No se encontraron los botones de navegación.");
    }

    showSlide(0);
    startSlider();
});


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navegacion");
    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // Si el usuario baja, ocultar la barra
            navbar.style.transform = "translateY(-100%)";
        } else {
            // Si el usuario sube, mostrar la barra
            navbar.style.transform = "translateY(0)";
        }

        lastScrollTop = scrollTop;
    });
});
