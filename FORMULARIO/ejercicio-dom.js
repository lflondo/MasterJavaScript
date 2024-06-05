"use strict";

window.addEventListener("load", () => {
  console.log("DOM cargado");

  var formulario = document.querySelector("#formulario");

  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none";

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Evento submit capturado");

    var nombre = document.querySelector("#name").value;
    var apellidos = document.querySelector("#lastname").value;
    var edad = parseInt(document.querySelector("#age").value);

    if (nombre.trim() == null || nombre.trim().length <= 2 || !isNaN(nombre)) {
      alert("El nombre no es válido");
      return false;
    }

    if (
      apellidos.trim() == null ||
      apellidos.trim().length <= 1 ||
      !isNaN(apellidos)
    ) {
      alert("El o los apellidos no son válidos");
      return false;
    }

    if (edad == null || edad <= 0 || isNaN(edad)) {
      alert("La edad no es válida");
      return false;
    }

    box_dashed.style.display = "block";

    var p_nombre = document.querySelector("#p_name span");
    var p_apellidos = document.querySelector("#p_lastname span");
    var p_edad = document.querySelector("#p_age span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellidos;
    p_edad.innerHTML = edad;

    /*var datos_usuario = [nombre, apellidos, edad];
    for (var indice in datos_usuario) {
      var parrafo = document.createElement("p");
      parrafo.append(datos_usuario[indice]);
      box_dashed.append(parrafo);
    }*/
  });
});
