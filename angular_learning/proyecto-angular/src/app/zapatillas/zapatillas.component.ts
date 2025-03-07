import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Component({
    selector:'zapatillas',
    standalone: false,
    templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
    public titulo: string ="Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];

    constructor(){
        this.marcas = new Array();
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebook', 'Blanco', true),
            new Zapatilla('Nike Runner MD', 60, 'Nike', 'Negro', false),
            new Zapatilla('Adidas Yezzy', 160, 'Adidas', 'Azul y Verde', true),
            new Zapatilla('Reebook Spartan', 90, 'Reebook', 'gris', true)
        ];

    }

    ngOnInit(): void {
        console.log(this.zapatillas);
        this.getMarcas();
    }

    getMarcas(){
        this.zapatillas.forEach((zapatilla, index) =>{
            if(this.marcas.indexOf(zapatilla.marca)< 0){
            this.marcas.push(zapatilla.marca);
            // console.log(index);
            }
        });
        console.log(this.marcas);
        
    }

}