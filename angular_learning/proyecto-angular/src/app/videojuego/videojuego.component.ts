import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    standalone: false,
    templateUrl:'./videojuego.component.html'
})
export class VideojuegoComponent{
    public titulo: string;
    public listado: string;


    constructor(){
        this.titulo = "Componente De Video Juegos"
        this.listado = "Listado de los juegos mas populares"
        

        console.log("Se cargo componente ok.")
    }

}