'use strict'

var numero = 12;
var texto = "Hola mundo soy una variable global";

function holaMundo (texto){

    var holaMundo2 ="Texto dentro de función";
    
    console.log(texto);
    console.log(numero.toString());
    console.log(holaMundo2);
}

holaMundo(texto);

//console.log(holaMundo2); No se puede hacer
