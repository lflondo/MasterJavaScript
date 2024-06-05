"use strict";

/*
 * Calculadora:
 * -Pida dos numeros por pantalla
 * -Si metemos uno mal nos lo vuelva a pedir
 *
 */

//var numero1 = parseInt(prompt("Ingrese el primer numero"));
while (isNaN(numero1) || numero1 < 0) {
 var numero1 = parseInt(prompt("Ingrese el primer numero"));
}
//var numero2 = parseInt(prompt("Ingrese el segundo numero"));
while (isNaN(numero2) || numero2 < 0) {
 var numero2 = parseInt(prompt("Ingrese el segundo numero"));
}

var resultado =
  "La suma es: " +
  (numero1 + numero2) +
  "<br>" +
  "La resta es: " +
  (numero1 - numero2) +
  "<br>" +
  "La multiplicacion es: " +
  numero1 * numero2 +
  "<br>" +
  "La division es: " +
  numero1 / numero2 +
  "<br>";

  var resultadoCMD =
  "La suma es: " +
  (numero1 + numero2) +
  "\n" +
  "La resta es: " +
  (numero1 - numero2) +
  "\n" +
  "La multiplicacion es: " +
  numero1 * numero2 +
  "\n" +
  "La division es: " +
  numero1 / numero2 +
  "\n";

document.write(resultado);
alert(resultadoCMD);
