

document.addEventListener("DOMContentLoaded", () => {

    const navbar = document.querySelector(".navegacion");

    let lastScrollTop = 0;

    window.addEventListener("scroll", () => {

        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {

            /* OCULTAR */
            navbar.style.top = "-100px";

        } else {

            /* MOSTRAR */
            navbar.style.top = "0";

        }

        lastScrollTop = scrollTop;

    });

});
