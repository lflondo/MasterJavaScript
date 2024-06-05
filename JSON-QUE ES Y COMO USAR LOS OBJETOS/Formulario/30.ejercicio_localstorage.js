"use stric";

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener("submit", () => {
  console.log("entra");
  var titulo = document.querySelector("#addpelicula").value;

  if (titulo.length >= 1) {
    localStorage.setItem(titulo, titulo);
  }
});

var ul = document.querySelector("#peliculas-list");

for (var j in localStorage) {

  if (typeof localStorage[j] == "string") {
    var li =document.createElement("li");
    li.append(localStorage[j]);
    ul.append(li);
  }
}

var formularioDelete = document.querySelector("#formDeletePeliculas");

formularioDelete.addEventListener("submit", () => {
  console.log("entra");
  var titulo = document.querySelector("#deletePelicula").value;

  if (titulo.length >= 1) {
    localStorage.removeItem(titulo);
  }
});
