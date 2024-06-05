"use strict";

/*
 * Muestra si un numero es par o impar
 * 1. ventana prompt
 * 2. si no es valido que nos pida de nuevo el numero
 */

var number = parseInt(prompt("Introduzca un numero"));

while (isNaN(number)) {
  var number = parseInt(prompt("Introduzca un numero"));
}

if (number % 2 == 0) {
  alert("el numero " + number + " es par");
} else {
  alert("el numero " + number + " es impar");
}
