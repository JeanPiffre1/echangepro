// Fonctionnalités JavaScript
document.querySelectorAll(".add-friend").forEach(button => {
    button.addEventListener("click", () => {
        alert("Demande d'ami envoyée !");
    });
});

document.querySelector(".edit-profile").addEventListener("click", () => {
    alert("Fonctionnalité de modification de profil à venir !");
});
function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
