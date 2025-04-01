import { Component, OnInit } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillasService } from "../services/zapatillas.service";

@Component({
    selector:'zapatillas',
    standalone: false,
    templateUrl: './zapatillas.component.html',
    providers: [ZapatillasService]
})

export class ZapatillasComponent implements OnInit{
    public titulo: string ="Componente de zapatillas";
    public zapatillas: Array<Zapatilla>;
    public marcas: String[];
    public color: string;
    public mi_marca: string;

    constructor(
        private _zapatillasService: ZapatillasService

    ){
        this.mi_marca ='Guess'
        this.color = 'blue';
        this.marcas = new Array();
        this.zapatillas = [];
    }

    ngOnInit(): void {
        this.zapatillas =this._zapatillasService.getZapatillas();
        // alert(this._zapatillasService.getTexto());
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

    getMarca(){
        alert(this.mi_marca)
    }

    addMarca(){
        this.marcas.push(this.mi_marca)
    }

    deleteMarca(index:any){
        //delete this.marcas[index];
        this.marcas.splice(index,1);
    }

    onBlur(){
        console.log("Haz salido del input")
    }

    mostrarTexto(){
        alert(this.mi_marca);
    }


}