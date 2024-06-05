'use strict'

/** Funciones de Flecha
 * son funciones que sustituye la palabra function y los parentesis y solo con poner el parametro y esto => seguido de las llaves
 */

/*var pelicula = function(nombre){
    return ("La pelicula es: "+nombre);
}*/

function sumame(numero1, numero2,sumaYmuestra,sumaPorDos){
    var sumar=numero1+numero2;
 
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;

    

}

sumame(10, 3, dato =>{
    console.log("La suma es: ",dato);
},
dato =>{
    console.log("La suma por dos es: ",(dato*2));
})