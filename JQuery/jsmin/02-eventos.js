'use strict'

$(document).ready(function(){
    //MouseOver y MouseOut
    var caja =$('#caja');
 /*
    caja.mouseover(function() {
        $(this).css("background", "blue");
    });
    caja.mouseout(function(){
        $(this).css("background", "red")
    });*/

    function cambiaAzul() {
        $(this).css("background", "blue");
    }

    function cambiaRojo(){
        $(this).css("background", "red");
    }

    //Hover

    caja.hover(cambiaAzul, cambiaRojo);

    //Click, Doble Click

    caja.click(function(){
        $(this).css("background", "black")
               .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "orange")
               .css("color", "gray");
    });

    //Focus y Blur

    var nombre = $('#nombre');

    nombre.focus(function(){
        $(this).css("border", "3px solid red");
    });

    nombre.blur(function(){
        $(this).css("border","1px solid green");
        
        $('#datos').text($(this).val()).show();
    })

});