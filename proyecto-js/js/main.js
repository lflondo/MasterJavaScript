$(document).ready(function(){

    //Slider
    if(window.location.href.indexOf('index')> -1){
         $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200, 
            responsive: true,
            pager: true    
        });
    }

    //Posts
    if(window.location.href.indexOf('index')> -1){
        var posts =[
            {
                title: 'Prueba de titulo 1',
                date: moment().format("MMMM Do YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus turpis id lectus rutrum, eu malesuada turpis egestas. Quisque ultricies tortor ut justo fermentum, vitae tincidunt erat auctor. Donec luctus accumsan malesuada. Suspendisse potenti. Pellentesque tincidunt turpis faucibus eros dapibus, non vestibulum urna consequat. Etiam eget neque varius, ultricies sem vel, pretium eros. Ut fermentum ipsum vel placerat tristique.'
            },      
            {
                title: 'Prueba de titulo 2',
                date: moment().format("MMMM dddd YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus turpis id lectus rutrum, eu malesuada turpis egestas. Quisque ultricies tortor ut justo fermentum, vitae tincidunt erat auctor. Donec luctus accumsan malesuada. Suspendisse potenti. Pellentesque tincidunt turpis faucibus eros dapibus, non vestibulum urna consequat. Etiam eget neque varius, ultricies sem vel, pretium eros. Ut fermentum ipsum vel placerat tristique.'
            }, 
            {
                title: 'Prueba de titulo 3',
                date: "publicado el día " + moment().format(" dddd ") + moment().date() +" de "+ moment().format("MMMM")+ " del año "+moment().format(" YYYY "),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus turpis id lectus rutrum, eu malesuada turpis egestas. Quisque ultricies tortor ut justo fermentum, vitae tincidunt erat auctor. Donec luctus accumsan malesuada. Suspendisse potenti. Pellentesque tincidunt turpis faucibus eros dapibus, non vestibulum urna consequat. Etiam eget neque varius, ultricies sem vel, pretium eros. Ut fermentum ipsum vel placerat tristique.'
            }, 
            {
                title: 'Prueba de titulo 4',
                date: "publicado el día " + moment().date()+ " del mes de "+ moment().format("MMMM")+ " del año "+moment().format(" YYYY "),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus turpis id lectus rutrum, eu malesuada turpis egestas. Quisque ultricies tortor ut justo fermentum, vitae tincidunt erat auctor. Donec luctus accumsan malesuada. Suspendisse potenti. Pellentesque tincidunt turpis faucibus eros dapibus, non vestibulum urna consequat. Etiam eget neque varius, ultricies sem vel, pretium eros. Ut fermentum ipsum vel placerat tristique.'
            }, 
            {
                title: 'Prueba de titulo 5',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus turpis id lectus rutrum, eu malesuada turpis egestas. Quisque ultricies tortor ut justo fermentum, vitae tincidunt erat auctor. Donec luctus accumsan malesuada. Suspendisse potenti. Pellentesque tincidunt turpis faucibus eros dapibus, non vestibulum urna consequat. Etiam eget neque varius, ultricies sem vel, pretium eros. Ut fermentum ipsum vel placerat tristique.'
            },  
        ];

        posts.forEach((item, index)=>{
            var post = `
                <article class="post">
                                <h2>${item.title}</h2>
                                <span  class="date">${item.date}</span>
                                <p>
                                    ${item.content}
                                </p>

                            <a href="#" class="button-more">Leer más</a>
                            </article>
            
            `;

            $("#posts").append(post);
            

        });
    }
    const theme = $('#theme');
 
    // Cargar tema almacenado al cargar la página
    const selectedTheme = localStorage.getItem('selectedTheme');
     
    if (selectedTheme) {
        theme.attr('href', `css/${selectedTheme}.css`);
    }

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
        localStorage.setItem('selectedTheme', 'green');
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
        localStorage.setItem('selectedTheme', 'red');
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
        localStorage.setItem('selectedTheme', 'blue');
    });

    //Scroll arriba de la web


    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login falso

    $('#login').submit(function(){
        
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p")

        about_parrafo.html("</br><strong>Bienvenido, "+form_name+" </strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>")

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    };

    //Acordeon
    if(window.location.href.indexOf('about')> -1){
        $("#acordeon").accordion();

    }

    if(window.location.href.indexOf('reloj')> -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
       

    }
    
    const validator = new JustValidate('#form_contact');
    validator
    .addField('#form_name',[
        {
            rule:'required',
            errorMessage: 'Se requiere el nombre',
        },
        {
            rule:'minLength',
            value:3,
            errorMessage: 'El nombre es muy corto',

        },
        {
            rule:'maxLength',
            value:15,
            errorMessage: 'El nombre es demasiado largo',
        },
        {
            rule: 'customRegexp',
            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
            errorMessage: 'El nombre solo puede contener letras y espacios',
        },
    ]);
});