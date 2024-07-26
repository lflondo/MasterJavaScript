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

});