'use strict'

$(document).ready(function(){
    //Load
    // $('#datosajax').load("https://reqres.in/");

    // metodo Get y Post

    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $('#datosajax').append("<p>"+element.first_name +" "+ element.last_name+"</p>")
        });
    })

});