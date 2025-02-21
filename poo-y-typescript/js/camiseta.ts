//Interface
interface CamisetaBase{
    setColor(color);
    getColor();

}
//CrearDecorador

function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de: "+ logo)
        }
    }

}

// Clase (Molde del objeto)
@estampar('Nike')
class Camiseta implements CamisetaBase{
    [x: string]: any;


    //Propiedades(Caracteristicas del objeto)
    private color:string;
    private modelo:string;
    private marca:string;
    private talla:string;
    private precio:number;

    //Metodos(Funciones o acciones del objeto)

    constructor(color, modelo, marca, talla, precio){
        this.color= color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }

    public setModelo(modelo){
        this.modelo = modelo
    }
    public getModelo(){
        return this.modelo;
    }

}

//Clase hija

class Chaqueta extends Camiseta{
    private capucha:boolean;

    public setCapucha(capucha: boolean){
        this.capucha=capucha;
    }
    public getCapucha(){
        return this.capucha
    }
    
}

// class Chaqueta extends Camiseta{

//     constructor(color , modelo, talla, precio, capucha){
//         super(color, modelo, precio, talla, precio);
//         this.capucha = capucha;
//     }

//     public capucha:boolean;

//     setCapucha(capucha: boolean){
//         this.capucha=capucha;
//     }
//     getCapucha(){
//         return this.capucha
//     }
    
// }



var camiseta = new Camiseta("Verde","manga corta","Nike","M",12);
console.log(camiseta);
camiseta.estampacion();


var chaqueta = new Chaqueta("Negra","Cuero","Adidas","XL",30);
chaqueta.setCapucha(true);
console.log(chaqueta);
