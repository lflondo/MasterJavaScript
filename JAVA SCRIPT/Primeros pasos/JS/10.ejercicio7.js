"use strict";

/*
 * Tabla de multiplicar de un numero introducido por pantalla
 */

while (isNaN(numero)) {
  var numero = parseInt(prompt("De que numero quieres la tabla?"));
}

var longi = parseInt(prompt("introduzca hasta que numero va la tabla"));

while (isNaN(longi)) {
  var longi = parseInt(prompt("introduzca hasta que numero va la tabla"));
}

document.write("<h1>Tabla del: " + numero + "</h1>");
for (var i = 1; i <= longi; i++) {
  document.write(numero + " X " + i + " = " + (numero * i)+ "<br>");
}

// todas las tablas de multiplicar hasta el 10

for (var c = 1; c <= 10; c++) {
  document.write("<h1>Tabla del: " + c + "</h1>");
  for (var i = 1; i <= 10; i++) {
    document.write(c + " X " + i + " = " + (c * i) + "<br>");
  }
}
