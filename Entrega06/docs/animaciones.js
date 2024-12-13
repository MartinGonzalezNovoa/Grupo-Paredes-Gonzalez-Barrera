document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.querySelector("#como-se-llego-a-esto iframe");

    function handleScroll() {
        const videoPosition = videoElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Detecta si el video está en la vista
        if (videoPosition.top >= 0 && videoPosition.bottom <= viewportHeight) {
            const iframeSrc = videoElement.src;
            if (!iframeSrc.includes("autoplay=1")) {
                videoElement.src = iframeSrc + (iframeSrc.includes("?") ? "&autoplay=1" : "?autoplay=1");
            }
            window.removeEventListener("scroll", handleScroll); // Elimina el evento después de reproducirlo
        }
    }

    window.addEventListener("scroll", handleScroll);
});



document.querySelector('a[href="#quienes-somos"]').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector('#quienes-somos');
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

