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
    const reglasNombreApellido =[
        {
            rule: 'required',
            errorMessage: 'Este campo es requerido',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'Mínimo 3 caracteres',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: 'Máximo 15 caracteres',
        },
        {
            rule: 'customRegexp',
            value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/,
            errorMessage: 'Solo letras y espacios',
        },
    ]
    validator
        .addField('#form_name', reglasNombreApellido)
        .addField('#form_surname', reglasNombreApellido)
        .addField('#form_email', [
            {
            rule: 'required',
            errorMessage: 'El correo es requerido',
            },
            {
            rule: 'email',
            errorMessage: 'Ingresa un correo electrónico válido',
            },
        ])
        .addField('#form_gender', [
            {
            rule: 'required',
            errorMessage: 'El genero es requerido',
            },
            {
                rule: 'custom',
                validator: (value) => value !== '',
                errorMessage: 'Selecciona una opción válida',
            },
        ])
        .addField('#form_fecha', [
            {
                rule: 'required',
                errorMessage: 'La fecha de nacimiento es requerida',
            },
            {
                rule: 'custom',
                validator: (value) => {
                    const regexFecha = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
                    return regexFecha.test(value);
                },
                errorMessage: 'El formato debe ser dd/MM/yyyy',
            },
            {
                rule: 'custom',
                validator: (value) => {
                    const [dia, mes, anio] = value.split('/');
                    const fecha = new Date(`${dia}-${mes}-${anio}`);
                    return (
                        fecha.getFullYear() === parseInt(anio) &&
                        fecha.getMonth() + 1 === parseInt(mes) &&
                        fecha.getDate() === parseInt(dia)
                    );
                },
                errorMessage: 'La fecha no es válida',
            },
            {
                rule: 'custom',
                validator: (value) => {
                    const [dia, mes, anio] = value.split('/');
                    const fechaNacimiento = new Date(`${anio}-${mes}-${dia}`);
                    const hoy = new Date();
                    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        
                    const mesActual = hoy.getMonth() + 1;
                    const diaActual = hoy.getDate();
                    const mesNacimiento = parseInt(mes);
                    const diaNacimiento = parseInt(dia);
        
                    if (
                        mesActual < mesNacimiento ||
                        (mesActual === mesNacimiento && diaActual < diaNacimiento)
                    ) {
                        edad--;
                    }
        
                    return edad >= 18;
                },
                errorMessage: 'Debes tener al menos 18 años',
            },
        ])
        .addField('#form_age', [
            {
                rule: 'required',
                errorMessage: 'La edad es requerida',
            },
            {
                rule: 'number',
                errorMessage: 'La edad debe ser un número',
            },
            {
                rule: 'minNumber',
                value: 0, // Asegura que no sea negativo
                errorMessage: 'La edad no puede ser negativa',
            },
            {
                rule: 'minNumber',
                value: 18,
                errorMessage: 'Debes tener al menos 18 años',
            },
            {
                rule: 'maxNumber',
                value: 150,
                errorMessage: 'La edad no puede ser mayor a 150 años',
            },
        ]);

        const ageInput = document.querySelector('#form_age');

        ageInput.addEventListener('input', () => {
            if (ageInput.value < 0) {
                ageInput.value = 0; // Fuerza el valor a 0 si es negativo
            }
        }); 
        
        const nombreInput = document.querySelector('#form_name');
        nombreInput.addEventListener('input', () => {
            validator.revalidateField('#form_name');
        });

        const apellidoInput = document.querySelector('#form_surname');
        apellidoInput.addEventListener('input', () => {
            validator.revalidateField('#form_surname');
        });

        const emailInput = document.querySelector('#form_email');
        emailInput.addEventListener('input', ()=>{
            validator.revalidateField('#form_email');
        });

        const fechaInput = document.querySelector('#form_fecha');
        fechaInput.addEventListener('input', ()=>{
            validator.revalidateField('#form_fecha');
        });

        const anioInput = document.querySelector('#form_age');
        anioInput.addEventListener('input', ()=>{
            validator.revalidateField('#form_age');
        });

    // Validación en tiempo real
    document.querySelectorAll('#form_name, #form_surname, #form_email, #form_fecha, #form_age').forEach((input) => {
        input.addEventListener('input', () => {
            validator.revalidateField(input.id);
        });
    });

    document.querySelectorAll('#form_name, #form_surname, #form_email, #form_fecha, #form_age').forEach((input) => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                validator.revalidateField(`#${input.id}`);
    
                // Espera 3 segundos y oculta el mensaje si el campo sigue vacío
                setTimeout(() => {
                    if (input.value.trim() === '') {
                        validator.clearErrors(`#${input.id}`);
                    }
                }, 3000); // 3000ms = 3 segundos
            }
        });
    });
    
});