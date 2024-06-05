"use strict";

//Arrays, Arreglos, Matrices

var name = "Luis";
var nombres = ["Vanne", "Gero", "Luna", 52, true];
var lenguajes = new Array("PHP", "JS", "JAVA", "PYTHON", "C#", "C++");

console.log(nombres);
console.log(lenguajes[3]);

/*
 * Array avanzados
 */

console.log(lenguajes.length);

var elemento;

while (
  elemento == undefined ||
  isNaN(elemento) ||
  elemento < 0 ||
  elemento >= nombres.length
) {
  if (elemento >= nombres.length) {
    alert("el elemento no puede ser mayor a " + (nombres.length - 1));
  } else if (elemento < 0) {
    alert("el elemento debe ser a partir del 0 ");
  }

  elemento = parseInt(prompt("Que elemento del array quieres?"));
}

alert(
  "Lo almacenado en la posicion: " + elemento + "\n\res: " + nombres[elemento]
);
console.log(
  "Lo almacenado en la posicion: " + elemento + "\n\r es: " + nombres[elemento]
);

document.write("<h1> Lenguajes de programación</h1>");

document.write("<ul>");

/* for(var i = 0; i<lenguajes.length; i++){
        document.write("<li>"+lenguajes[i]+"</li>")
    }

    lenguajes.forEach((elemento1, indice, data)=>{
        console.log(data);
        document.write("<li>"+indice+"-"+elemento1+"</li>")
    });*/

for (let lenguaje in lenguajes) {
  document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

/*
 * Busquedas en Array
 */

/*var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP";
});*/

var busqueda = lenguajes.find((lenguaje) => lenguaje == "PHP");

console.log(busqueda);


var busqueda = lenguajes.findIndex((lenguaje) => lenguaje == "PHP");

console.log("la busqueda la arroja en la posicion: "+busqueda);


var precios = [10,20,30,50,80,100];

var busqueda1 = precios.some(precio => precio>=101);

console.log("Precios mayores a 50 es: "+busqueda1);