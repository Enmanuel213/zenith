function openVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoFrame");

    modal.style.display = "flex";
    video.src = "https://www.youtube.com/embed/mV4jf536740?autoplay=1";
}

function closeVideo() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("videoFrame");

    modal.style.display = "none";
    video.src = "";
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