"use strict";

/*
 * Muestre todos los numeros divisores de un numero introducido en prompt
 */

var numero = parseInt(prompt("Ingrese numero"));

for (var i = 1; i <= numero; i++) {
  if (numero % i == 0) {
    document.write("Es divisor de : " + i + "</br>");
  }
}
