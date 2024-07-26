"use strict";

$(document).ready(function () {
  //Load
  // $('#datosajax').load("https://reqres.in/");

  // metodo Get y Post

  $.get("https://reqres.in/api/users", { page: 2 }, function (response) {
    response.data.forEach((element, index) => {
      $("#datosajax").append(
        "<p>" + element.first_name + " " + element.last_name + "</p>"
      );
    });
  });

  $("#formulario").submit(function (e) {
    e.preventDefault();

    var usuario = {
      name: $('input[name="nombre"]').val(),
      profesion: $('input[name="profesion"]').val(),
    };
    console.log(usuario);

   /* $.post($(this).attr("action"), usuario, function (response) {
      console.log(response);
    }).done(function () {
      alert("Usuario añadido correctamente");
    });*/

    // Metodo dolar punto ajax

    $.ajax({
      type: "POST",
      dataType: "json",
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function () {
        console.log("Enviando usuario....");
      },
      success: function (response) {
        console.log(response);
      },
      error: function () {
        console.log("Ha ocurrido un error");
      },
      timeout: 1000,
    });

    return false;
  });
});
