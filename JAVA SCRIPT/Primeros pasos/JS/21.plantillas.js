"use strict";

//Plantillas de texto
var nombre;
var apellidos;

while (!nombre || !isNaN(nombre) || nombre.length < 3) {
  nombre = prompt("Ingresa tu nombre");
}

while (!apellidos || !isNaN(apellidos) || apellidos.length < 3) {
  apellidos = prompt("Ingresa tus apellidos");
}
//var texto = ("Mi nombre es: "+nombre +"<br> Mi apellido es: "+apellidos);

var texto = `
   <h1> Hola que tal</h1>
   <h3>Mi nombre es: ${nombre} </h3>
   <h3>Mi apellido es: ${apellidos} </h3>

`;

document.write(texto);
