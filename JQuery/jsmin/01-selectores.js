'use strict'

$(document).ready(function(){

    //Selectorea de ID
   $("#rojo").css("background","red")
                        .css("color","white")
                        .css("font-family", "sans-serif");
   
   $("#amarillo").css("background","yellow")
                                .css("color","green")
                                .css("font-family","monospace");
    
    $("#verde").css("background","green")
               .css("color", "white");

    //Selectores por clases

    var mi_clase =$('.zebra').css("padding","5px")



    $('.otrico').click(function(){
        console.log("Click dado!!")
        $(this).addClass('zebra');
    });

    //Selectores por etiquetas
    
    var parrafos = $('p'). css("cursor", "pointer");

    parrafos.click(function(){
        var that= $(this);
        if(!that.hasClass('grande')){
            that.addClass('grande');
        }else{
            that.removeClass('grande')
            that.removeClass('zebra')
        }
        
    });


    //Selectores de atributo

    $('[title="Google"]').css('background','#ccc');
    $('[title="store"]').css('background','skyblue');

});