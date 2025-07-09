// SCRIPT PARA LOS FORMATOS
window.addEventListener("DOMContentLoaded", () => {
  // Creamos las secciones
  const seccions = {
    bestSeller: document.getElementById("seleccion-bestSellers"),
    botellaPeque: document.getElementById("seleccion-botellaPeque"),
    botellaGrande: document.getElementById("seleccion-botellaGrande"),
    botellaShot: document.getElementById("seleccion-shots"),
  };

  // escondemos todas excepto Best Sellers(la inicial)
  Object.values(seccions).forEach((sec) => (sec.style.display = "none"));
  seccions.bestSeller.style.display = "flex";

  // Enlaces a los titulos
  const titols = {
    bestSeller: document.getElementById("bestSeller"),
    botellaPeque: document.getElementById("botellaPeque"),
    botellaGrande: document.getElementById("botellaGrande"),
    botellaShot: document.getElementById("botellaShot"),
  };

  // Mostrar la seccion correspondiente
  function mostrarSeccio(clauActiva) {
    Object.entries(seccions).forEach(([clau, seccio]) => {
      seccio.style.display = clau === clauActiva ? "flex" : "none";
    });

    // Cambiar estilos de los titulos
    Object.entries(titols).forEach(([clau, titol]) => {
      if (clau === clauActiva) {
        titol.classList.add("tituloActivo");
      } else {
        titol.classList.remove("tituloActivo");
      }
    });
  }

  // Listeners para los cambios
  Object.entries(titols).forEach(([clau, titol]) => {
    titol.addEventListener("click", () => mostrarSeccio(clau));
  });
});
