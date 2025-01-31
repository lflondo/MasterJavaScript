$(document).ready(function(){

    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200, 
        responsive: true,
        pager: true    
    });

    //Posts
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

    
});