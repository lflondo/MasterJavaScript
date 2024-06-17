'use strict'

var fecha = new Date();

var year = fecha.getFullYear();
var mes= (fecha.getMonth()+1); // se inicializa con+1 por que el metodo comienza a contar los meses desde el 0
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();

var textoHora = `
    El año es: ${year}
    El mes es: ${mes}
    El día es: ${dia}
    La hora es: ${hora}:${minutos}
`;
console.log(fecha)
console.log(textoHora)

console.log(Math.ceil(Math.random()*10000));