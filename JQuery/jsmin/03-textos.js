'use strict'

$(document).ready(function(){
    reloadslinks();

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
            //$('#menu').html('<li><a href="'+$('#add_link').val()+'"></a></li>');
            $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
            //$('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
            //$('#menu').before('<li><a href="'+$('#add_link').val()+'"></a></li>');
            //$('#menu').after('<li><a href="'+$('#add_link').val()+'"></a></li>');
        $('#add_link').val('');
        reloadslinks();
    });

  
});

function reloadslinks(){
    $('a').each(function(){
        var that =$(this);
        console.log($(this));
            var elnace = $(this).attr("href");

            that.attr('target', '_blank');
            
            that.text(elnace)
            
       });
}