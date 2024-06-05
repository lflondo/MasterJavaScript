'use strict'
// let: Permite definir variables limietando su alcance al bloque, definicion o aclaracion donde se esta usando.
// var: define variable global o local sin importar el ambito del bloque.

var pais = "Colombia";
var continente = "America";
var antiguedad = 2023;
var paisContinente = pais + " " + continente;

//alert("El continente de " + pais + " es " + continente);

console.log("El continente de " + pais + " es " + continente, antiguedad);


//----------------------------------let y var----------------------------------------------


// Prueba con Var

var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero=50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50  


//Prueba con let

var texto ="Luis Londoño"
console.log(texto); // valor Luis Londoño

if(true){
    let texto ="Gero Londoño";
    console.log(texto); // valor Gero Londoño 
}
console.log(texto); // valor Luis Londoño
