//tsc -w *.ts

type cualquiera = string | number

//sting
let cadena: string ="Luis Londono";

let mutable: string | number="mutable";

mutable = 45.9;

let mutable2: cualquiera = 108




//number
let numero: number =12;

//boleano
let verdadero_falso: boolean = true;

//Any
let cualquiera: any= "hola"
cualquiera = 7.7;

//Arrays
var lenguajes: Array<string> =["HTML", "JS", "CSS"];
var lenguajes1: Array<number> =[10, 12, 18];
var lenguajes2: Array<any> =["HTML", "JS", "CSS",12];

let years: number[] = [12,14,18]

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, lenguajes1, lenguajes2, years, mutable, mutable2);


//let vs var

var numero1 = 10;
var numero2 = 12;

if(numero1 ==10){
    let numero1 = 44;
    var numero2 = 55;

    console.log("Este es el valor del let y el var dentro del ciclo ", numero1, numero2)
}
console.log("aqui toma el numero2 como var global pero no el let ", numero1, numero2)