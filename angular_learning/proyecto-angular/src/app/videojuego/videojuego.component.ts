import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    standalone: false,
    templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;


    constructor(){
        this.titulo = "Componente De Video Juegos"
        this.listado = "Listado de los juegos mas populares"
        

        console.log("Se cargo componente ok.")
    }

    ngOnInit(){
        console.log("OnInit ejecutado");  
    }
    ngDoCheck(){        
        console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){        
        console.log("OnDestroy ejecutado");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente";
    }

}