'use strict'

/*
*
*Programa que nos pida dos numeros y que nos diga cual es el mayor cual es el menor
*O si son iguales
*Plus: si lo que ingresas no son numeros o son menores o iguales a 0, que nos los
*vuelva a pedir.
*
*/

var numero1 = parseInt(prompt('Introduce numero 1', 0));
var numero2 = parseInt(prompt('Introduce numero 2', 0));
//console.log(numero1, numero2);


while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce numero 1', 0));
    numero2 = parseInt(prompt('Introduce numero 2', 0));
}
if(numero1==numero2){
    alert("los numeros son iguales");
}else if(numero1>numero2){
    alert("el numero mayor es: "+ numero1);
    alert("el numero menor es: "+numero2);
}else if(numero1<numero2){
    alert("el numero mayor es el: "+numero2);
    alert("el numero menor es el: "+numero1);
}else{
    alert("introduzca numeros correctos")
}
