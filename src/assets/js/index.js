document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-copy]").forEach((element) => {
        element.addEventListener("click", () => {
            navigator.clipboard.writeText(element.getAttribute("data-copy"))
                .then(() => {
                    const originalInnerHTML = element.innerHTML;
                    element.innerHTML = "Copié !";
                    setTimeout(() => {
                        element.innerHTML = originalInnerHTML;
                    }, 2_000);
                });
        });
    });
});
