// === Active Link Highlight ===
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const currentUrl = window.location.href;
  
    navLinks.forEach(link => {
      if (currentUrl.includes(link.getAttribute("href"))) {
        link.classList.add("active");
      }
    });
  });
  
  // === Confirmation avant envoi du formulaire (page contact) ===
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const confirmed = confirm("Voulez-vous vraiment envoyer ce message ?");
      if (!confirmed) {
        e.preventDefault();
      }
    });
  }
  
  // === Scroll vers le haut lors du clic sur le logo ===
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.style.cursor = "pointer";
    logo.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }