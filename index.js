const currentYear = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".year").forEach((element) => {
        element.innerHTML = currentYear;
    })
});