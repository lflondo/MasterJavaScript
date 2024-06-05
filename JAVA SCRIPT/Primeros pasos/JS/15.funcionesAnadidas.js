"use strict";

/*
 * Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
 */

function porConsola(numero1, numero2) {
  console.log("suma :" + (numero1 + numero2));
  console.log("Resta :" + (numero1 - numero2));
  console.log("Multiplicacion :" + numero1 * numero2);
  console.log("Division :" + numero1 / numero2);
  console.log("******************************************************");
}

function porPantalla(numero1, numero2) {
  document.write("suma :" + (numero1 + numero2) + "<br>");
  document.write("Resta :" + (numero1 - numero2) + "<br>");
  document.write("Multiplicacion :" + numero1 * numero2 + "<br>");
  document.write("Division :" + numero1 / numero2 + "<br>");
  document.write("******************************************************");
}

//Defino la función con parametros
function calculadora(numero1, numero2, mostrar = false) {
  //Conjunto de instrucciones
  if (mostrar == false) {
    porConsola(numero1, numero2);
  } else {
    porPantalla(numero1, numero2);
  }

  return true;
}

//Invocar o llamar a la funcion
calculadora(4, 2);
calculadora(5, 3, true);
