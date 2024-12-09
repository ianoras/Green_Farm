const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");

// Toggle della navbar
hamburger.addEventListener("click", function () {
  nav.classList.toggle("active");
  hamburger.setAttribute(
    "aria-expanded",
    nav.classList.contains("active").toString()
  );
});

// Chiudere la navbar al click di un link
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

//prenotazioni
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Impedisce l'invio del modulo e il ricaricamento della pagina

  // Ottieni i valori inseriti dall'utente
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const name = document.getElementById("name").value;

  // Mostra un messaggio di conferma
  alert(`Grazie, ${name}! La tua prenotazione per "${service}" il ${date} è stata registrata con successo.`);
});


document.addEventListener("DOMContentLoaded", function () {
  const hiddenImages = document.querySelectorAll(".gallery-grid img.hidden");
  const loadMoreButton = document.getElementById("load-more");
  const imagesPerLoad = 6; // Numero di immagini da caricare per clic

  loadMoreButton.addEventListener("click", function () {
    let loadedCount = 0;

    // Mostra il numero di immagini specificato
    hiddenImages.forEach((img) => {
      if (loadedCount < imagesPerLoad && img.classList.contains("hidden")) {
        img.classList.remove("hidden");
        img.classList.add("visible");
        loadedCount++;
      }
    });

    // Nasconde il pulsante se non ci sono più immagini da caricare
    if (document.querySelectorAll(".gallery-grid img.hidden").length === 0) {
      loadMoreButton.style.display = "none";
    }
  });
});


