"use strict";

// BON - Browser Object Model

function getBom() {
  console.log("Ancho de ventana como este " + window.innerWidth);
  console.log("Alto de ventana como este " + window.innerHeight);
  console.log("Todo el ancho de la ventana " + screen.width);
  console.log("Todo el alto de la ventana " + screen.height);
  console.log(window.location);
}

function redirect(url) {
  window.location.href = url; // Desde la consola lo llamamos redirect("url a la cual queramos que nos dirija")
}

function abrirVentana(url2) {
  window.open(url2, "", "width =400, height=300");
}
getBom();
