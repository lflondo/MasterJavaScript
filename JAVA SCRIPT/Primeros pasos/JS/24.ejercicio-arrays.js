"use strict";

/*
 *  1. Pida 6 numeros por pantalla y os meta en un array
 *  2. Mostrar el array entero(Todos sus elementos) en el cuerpo de la pagina y en la consola
 *  3.Ordenarlo y mostrarlo
 *  4.Invertir su orden y mostrarlo
 *  5.Mostrar cuantos elementos tiene el array
 *  6. Busqueda de un valor introducido por el usuario que nos diga si lo encuentra y su indice
 * (Se valorara el uso de funciones)
 */

function mostrarArray(elementos, textoCustom = "") {
  document.write("<h1>Contedino del array " + textoCustom + " </h1>");
  document.write("<ul>");
  elementos.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li>");
  });
  document.write("</ul>");
}

var n = parseInt(prompt("Digite la cantidad de numero a ingresar hasta el 9"));
//var numero = new Array(n);

var numeros = [];

for (var i = 0; i < n; i++) {
  //numero[i] = parseInt(prompt("Introduce un numero"));
  numeros.push(parseInt(prompt("Inrodice el numero")));
}

// Mostrar el array en la pagina
/*document.write("<h1>Contedino del array</h1>");
numeros.forEach((numero, index) => {
  document.write("<strong>" + numero + "</stron><br>");
});*/
mostrarArray(numeros);

// Mostrar el array por la consola
console.log(numeros);

//Ordenar el primer digito y mostrar
numeros.sort();
mostrarArray(numeros, "ordenado por primer digito");

//Ordenar por numeros y mostrar
numeros.sort(function (a, b) {
  return a - b; //para ordenar desc(b-a)
});
mostrarArray(numeros, "ordenado por numero");

//Invertir el orden y mostrar
numeros.reverse();
mostrarArray(numeros, "invertido");

//Contar elementos
document.write("<h1>El array tiene: " + numeros.length + " elementos");

//buscar elemento

var busqueda = parseInt(prompt("Busca un numero"));
var posicion = numeros.findIndex((numero) => numero == busqueda);

if (posicion && posicion != -1) {
  document.write("<hr><h1>Encontrado</h1>");
  document.write("<h1>Posicion de la busqueda: " + posicion + "</h1><hr/>");
} else {
  document.write("<hr><h1>No encontrado</h1><hr/>");
}
