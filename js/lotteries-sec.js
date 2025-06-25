document.addEventListener("DOMContentLoaded", function () {
    const ellipse = document.querySelector(".ellipse-bg");
    const section = document.querySelector(".lotteries-sec");

    function updateEllipsePosition() {
        if (!ellipse || !section) return;

        const isMobile = window.innerWidth <= 575;

        if (!isMobile) {
            ellipse.style.position = "absolute";
            ellipse.style.top = "60%";
            return;
        }

        const sectionRect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + sectionRect.top;
        const sectionBottom = sectionTop + section.offsetHeight;
        const ellipseHeight = ellipse.offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY <= sectionBottom - 870) {
            ellipse.style.position = "fixed";
            ellipse.style.top = "60%";
        } else if (scrollY < sectionTop) {
            ellipse.style.position = "absolute";
            ellipse.style.top = "15%";
        } else {
            ellipse.style.position = "absolute";
            ellipse.style.top = (section.offsetHeight - ellipseHeight +100) + "px";
            // ellipse.style.top = 7000+"px";
        }
    }

    window.addEventListener("scroll", updateEllipsePosition);
    window.addEventListener("resize", updateEllipsePosition);
    updateEllipsePosition();
});