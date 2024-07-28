"use strict"

$(document).ready(function(){
    console.log("Cargando....");
    //Mover elemneto por la pagina
    $('.elemento').draggable();
    $('#elemento').draggable();

    //redimencionar

    $('#elemento').resizable();

    //Seleccionar elementos 
    //$('.lista-gamer').selectable();

    //ordenar elementos
    $('.lista-gamer').sortable({
        update: function(event, ui){
            console.log("Ha cambiado la lista")
        }
    });

    //Drop
    $("#movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area")
        }
    });

    //Efectos
    $("#mostrar").click(function(){
    //$(".caja-efectos").fadeToggle()
     //$(".caja-efectos").toggle("fade")    
    //$(".caja-efectos").effect("explode")
    //$(".caja-efectos").toggle("explode") 
    //$(".caja-efectos").toggle("blink")
    //$(".caja-efectos").toggle("blind")
    //$(".caja-efectos").toggle("slide")
    //$(".caja-efectos").toggle("drop") 
    //$(".caja-efectos").toggle("fold")
    //$(".caja-efectos").toggle("puff")
    //$(".caja-efectos").toggle("scale")
    $(".caja-efectos").toggle("shake", 4000)   
    });
});