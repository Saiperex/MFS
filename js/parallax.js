// Obtener referencia al elemento ".bgParallax"
var bgParallax = document.querySelector(".bgParallax");

// Función para manejar el evento de scroll
function handleScroll() {
  // Obtener el desplazamiento vertical del scroll
  var scrollPosition = window.pageYOffset;

  // Aplicar transformación CSS al fondo para crear el efecto parallax
  bgParallax.style.transform = "translateY(" + -scrollPosition * 0.2 + "px)";
}

// Agregar evento de scroll y llamar a la función handleScroll
window.addEventListener("scroll", handleScroll);