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
        $(this).css("background", "red")
               .css("color", "gray");
    });

    //Focus y Blur

    var nombre = $('#nombre');
    var datos = $('#datos')

    nombre.focus(function(){
        $(this).css("border", "3px solid red");
    });

    nombre.blur(function(){
        $(this).css("border","1px solid green");
        
        datos.text($(this).val()).show();
    });

    //MouseDown y MouseUp
    datos.mousedown(function(){
        $(this).css("border-color", "skyblue");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "black");
    });

    //MouseMove

    $(document).mousemove(function(U){
        $('body').css('cursor','none');
        console.log("En X: "+event.clientX);
        console.log("En Y: "+event.clientY);
        var sigueme = $("#sigueme");
        sigueme.css("left",event.clientX)
               .css("top",event.clientY);
    });
});