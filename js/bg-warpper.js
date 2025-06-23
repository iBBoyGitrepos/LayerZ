document.addEventListener("DOMContentLoaded", function () {
    const webWrapper = document.querySelector('.web-wrapper');
    const bgWrapper = document.querySelector('.bg-wrapper');

    if (webWrapper && bgWrapper) {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const newHeight = entry.contentRect.height;
                bgWrapper.style.height = `${newHeight}px`;
            }
        });

        observer.observe(webWrapper);
    }
});