const carrusel = document.querySelector(".carrusel");
const figure = document.querySelector("figure");
const slides = document.querySelectorAll(".slide")
const derBot = document.querySelector(".botonDer")

let slideActual = 0;

function mostrarSiguienteSlide() {
  slides[slideActual].style.display = "none";
  slideActual = (slideActual + 1) % slides.length;
  slides[slideActual].style.display = "block";
}

derBot.addEventListener("click", () => {
  mostrarSiguienteSlide();
});

