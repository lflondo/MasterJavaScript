"use strict";

/*
 * Una funcion es una agrupacion reutilizable de un conjunto de instrucciones
 */

//Defino la función con parametros
function calculadora(numero1, numero2) {

  //Conjunto de instrucciones

  console.log("suma :"+ (numero1 + numero2));
  console.log("Resta :"+ (numero1 - numero2));
  console.log("Multiplicacion :"+ (numero1 * numero2));
  console.log("Division :"+ (numero1 / numero2));
  console.log("******************************************************");
  
  return "Hola soy calculadora"
 
}

//Invocar o llamar a la funcion
//console.log(calculadora(), calculadora(), calculadora());
calculadora(2, 4);
calculadora(5,3);


for( var i = 1; i<= 10; i++){
    console.log(i)
    calculadora(i, 2);
}