const botonesFiltro = document.querySelectorAll(".filtro");
const tarjetasProyecto = document.querySelectorAll(".proyecto");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    const categoriaElegida = boton.dataset.categoria;

    tarjetasProyecto.forEach((tarjeta) => {
      if (
        categoriaElegida === "todos" ||
        tarjeta.dataset.categoria === categoriaElegida
      ) {
        tarjeta.classList.remove("d-none");
      } else {
        tarjeta.classList.add("d-none");
      }
    });

    botonesFiltro.forEach((boton) => {
      boton.classList.remove("btn-dark");
      boton.classList.add("btn-outline-dark");
    });

    boton.classList.remove("btn-outline-dark");
    boton.classList.add("btn-dark");
  });
});
const btnVolverArriba = document.getElementById("btnVolverArriba");

window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    btnVolverArriba.style.display = "block";
  } else {
    btnVolverArriba.style.display = "none";
  }
});

btnVolverArriba.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});