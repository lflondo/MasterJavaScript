"use strict";

/*
 * Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
 */

//Defino la función con parametros
function calculadora(numero1, numero2, mostrar = false) {
  //Conjunto de instrucciones

  if (mostrar == false) {
    console.log("suma :" + (numero1 + numero2));
    console.log("Resta :" + (numero1 - numero2));
    console.log("Multiplicacion :" + numero1 * numero2);
    console.log("Division :" + numero1 / numero2);
    console.log(mostrar);
    console.log("******************************************************");

    return "Hola soy calculadora";
  }else{
    document.write("suma :" + (numero1 + numero2)+"<br>");
    document.write("Resta :" + (numero1 - numero2)+"<br>");
    document.write("Multiplicacion :" + (numero1 * numero2)+"<br>");
    document.write("Division :" + (numero1 / numero2)+"<br>");
    document.write(mostrar+"<br>");
    document.write("******************************************************");
  }
}

//Invocar o llamar a la funcion
//console.log(calculadora(), calculadora(), calculadora());
calculadora(4, 2);
calculadora(5, 3, true);
