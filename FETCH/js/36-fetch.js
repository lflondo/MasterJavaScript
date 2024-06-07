'use strict';

// Fetch (ajax) y peticiones a servicios / apis rest



var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

    getUsuarios()
        .then(data => data.json())
        .then(users=> {
            listadoUsuarios(users.data);

            return getJanet();
            
        })
        .then (data => data.json())
        .then (user2 =>{
            mostrarJanet(user2.data);

        })


function getUsuarios(){
    return fetch('https://reqres.in/api/users');

}

function  getJanet(){

    return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i +". "+ user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    });
}


function mostrarJanet(user){ 
   
        let nombre = document.createElement('h4');

        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;

        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(avatar);
        div_janet.appendChild(nombre);
        

        document.querySelector("#janet .loading").style.display = 'none';
}
