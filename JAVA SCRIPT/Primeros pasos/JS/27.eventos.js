"use strict";

window.addEventListener("load", () => {
  //Eventos mouse

  function cambiarColor() {
    console.log("Me has dado click");
    var bg = boton.style.background;

    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "3px solid #ccc";

    return true;
  }

  var boton = document.querySelector("#boton");

  // Evento click
  boton.addEventListener("click", function () {
    cambiarColor();
    console.log(this);
    this.style.border = "10px solid black";
  });

  //mouse over
  boton.addEventListener("mouseover", () => {
    boton.style.background = "yellow";
  });

  //mouse out
  boton.addEventListener("mouseout", () => {
    boton.style.background = "white";
  });

  // Eventos de teclado

  //Focus
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("focus", () => {
    console.log("[focus] Estas dentro del input");
  });

  // Blur
  input.addEventListener("blur", () => {
    console.log("[blur] Estas fuera del input");
  });

  //Keydown
  input.addEventListener("keydown", (event) => {
    console.log("[keydown] Estas pulsando esta tecla ", event.key);
  });

  //keypress
  input.addEventListener("keypress", (event) => {
    console.log("[keypress] tecla presionada ", event.key);
  });

  //keyup
  input.addEventListener("keyup", (event) => {
    console.log("[keyup] tecla soltada ", event.key);
  });
});
