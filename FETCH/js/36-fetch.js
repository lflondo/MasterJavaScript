'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest


window.addEventListener("load",()=>{
var div_usuarios = document.querySelector("#usuarios");

var usuarios = [];

fetch('https://reqres.in/api/users?page=1')
    .then(data => data.json())
    .then(users => {
        usuarios = users.data;
        console.log(usuarios);


        usuarios.map((user, i) => {
            let nombre = document.createElement('h4');

            nombre.innerHTML = i + user.firts_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);
        });
    })
})