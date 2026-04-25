// ABRIR VIDEO
function openVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoLocal");

    modal.style.display = "flex";
    video.currentTime = 0;
    video.play();
}

// CERRAR VIDEO
function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoLocal");

    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
}


// SCROLL SUAVE (esto sí estaba bien, lo dejo limpio)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});