"use strict";

// tranformacion de textos

var numero = 444;
var texto1 = "  bienvenido al curso de javascript  ";
var texto2 = "QUEDO OKAY QUEDA";
var texto3 = "Cuando se repite lo que se repite se vuelve a repetir"

var dato = numero.toString();
var dato1 =texto1.toUpperCase();
var dato2 =texto2.toLowerCase();

console.log(typeof dato,"\r\n", dato);
console.log(dato1);
console.log(dato2);

// calcular longitud

var nombre="Luis";
console.log(nombre.length +" caracteres");

var busqueda = texto1.indexOf("curso");
console.log(busqueda +" posicion que comienza");


var busqueda2  = texto2.lastIndexOf("QUEDA");
console.log(busqueda2 +" ultima posicion que aparece");


busqueda = texto1.search("curso");
console.log(busqueda +" posicion que comienza");


busqueda = texto3.match("repite");
console.log(busqueda);

busqueda = texto3.match(/repite/g);
console.log(busqueda);

busqueda = texto1.substr(14,5);
console.log(busqueda);


busqueda = texto1.charAt(14);
console.log(busqueda);


busqueda = texto1.startsWith("bienvenido");
console.log(busqueda);


busqueda2 = texto2.endsWith("QUEDA");
console.log(busqueda2);

// Funciones para reemplazar texto

busqueda = texto1.replace("curso", "cambio");
console.log(busqueda);


busqueda = texto1.slice(14, 19);
console.log(busqueda);

busqueda = texto1.split();
console.log(busqueda);

busqueda = texto1.split(" ");
console.log(busqueda);


busqueda = texto1.trim();
console.log(busqueda);