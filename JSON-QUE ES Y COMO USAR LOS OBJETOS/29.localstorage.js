'use stric'
window.addEventListener("DOMContentLoaded", ()=>{
//Localstorage

// comprobar disponibilidad del localstorage

if(typeof(Storage)!== 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible localstorage");
}

// Guardar en el localstorage

localStorage.setItem("Titulo","Curso de java script");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML= localStorage.getItem("Titulo");

// Guardar objetos
var usuario ={
    nombre: "Luis Londoño",
    email: "luis@fercho.com",
    web: "LuisWeb.es"
}
localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto

//console.log(localStorage.getItem("usuario")); no es recomendable por que no saca un objeto sino un string

var userJs= JSON.parse(localStorage.getItem("usuario"));

console.log(userJs);
document.querySelector("#datos").append(userJs.nombre+" - "+userJs.web);

localStorage.removeItem("usuario"); // vacia la llame de esta variable
localStorage.clear(); //elimiena todas la llaves del localstorage
})