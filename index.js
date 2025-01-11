const carrusel = document.querySelector(".carrusel");
const slides = document.querySelectorAll(".slide");
const derBot = document.querySelector(".botonDer");
const izqBot = document.querySelector(".botonIzq");

let slideActual = 0;

function mostrarSiguienteSlide() {
  slides[slideActual].style.display = "none";
  slideActual = (slideActual + 1) % slides.length;
  slides[slideActual].style.display = "block";
}

derBot.addEventListener("click", () => {
  mostrarSiguienteSlide();
});

function mostrarSlideAnterior() {
  slides[slideActual].style.display = "none";
  slideActual = (slideActual - 1 + slides.length) % slides.length;
  slides[slideActual].style.display = "block";
}

izqBot.addEventListener("click", () => {
  mostrarSlideAnterior();
});

