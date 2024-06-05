"use strict";

//DOM - Document Object Model

function cambiaColor(color) {
  caja.style.color = color;
}

// Conseguir elementos con un ID concreto
//var caja = document.getElementById("micaja"); // .innerHTML= saca el texto que tengo dentro del html

var caja = document.querySelector("#micaja");

caja.innerHTML = "¡Cambie el texto de mi div del HTML!";
caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.style.fontFamily = "Arial";
caja.className = "hola";

console.log(caja);

//Conseguir elementos por sus etiquetas
var todosLosDivs = document.getElementsByTagName("div");
console.log(todosLosDivs);

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for (valor in todosLosDivs) {
  if (typeof todosLosDivs[valor].textContent == "string") {
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.prepend(parrafo);
  }
}
seccion.append(hr);
//Conseguir elementos por sus clases

var divsRojos = document.getElementsByClassName("rojo");
var div;
for (div in divsRojos) {
  if (divsRojos[div].className == "rojo") {
    divsRojos[div].style.background = "red";
  }
}
console.log(divsRojos);

// Query selector

var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);
