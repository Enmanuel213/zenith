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
