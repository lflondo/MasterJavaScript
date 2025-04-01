import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()
export class ZapatillasService {
    public zapatillas: Array<Zapatilla>;

    constructor() { 
        this.zapatillas = [
            new Zapatilla('Reebook Classic', 80, 'Reebook', 'Blanco', true),
            new Zapatilla('Nike Runner MD', 60, 'Nike', 'Negro', false),
            new Zapatilla('Adidas Yezzy', 160, 'Adidas', 'Azul y Verde', true),
            new Zapatilla('Reebook Spartan', 90, 'Reebook', 'gris', true)
        ];
    }

    getTexto(){
        return"hola mundo desde un servicio"
    }

    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }

}