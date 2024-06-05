'use strict'

// Array multidimencinal


var categorias = ['Accion', 'Comedia', 'Drama', 'Terror'];
var peliculas = ['Zuranda','Fast furious', 'La monja', 'Son como niños', 'La vida es bella'];

var cine = [categorias, peliculas];

console.log(cine);

console.log(cine[0][1]);
console.log(cine[1][1]);

/** 
 * Operaciones con Arrays
*/

/*peliculas.push("Batman");
console.log(peliculas);

var elemento;

do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "Acabar")

peliculas.pop(); //Elimina el ultimo elemento de un array.
peliculas[4] = undefined;


console.log(peliculas);*/

var indice = peliculas.indexOf('La monja');
 
console.log(indice);

if(indice > -1){
    peliculas.splice(indice, 1);
}

console.log(peliculas);


// convertir de un Array a texto
var pelicula_string = peliculas.join();

console.log(pelicula_string);



// convertir un string en un array

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ");

console.log(cadena_array);


// ordenar arrays

peliculas.sort();

categorias.reverse();