//tsc -w *.ts
//sting
var cadena = "Luis Londono";
var mutable = "mutable";
mutable = 45.9;
var mutable2 = 108;
//number
var numero = 12;
//boleano
var verdadero_falso = true;
//Any
var cualquiera = "hola";
cualquiera = 7.7;
//Arrays
var lenguajes = ["HTML", "JS", "CSS"];
var lenguajes1 = [10, 12, 18];
var lenguajes2 = ["HTML", "JS", "CSS", 12];
var years = [12, 14, 18];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, lenguajes1, lenguajes2, years, mutable, mutable2);
//let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1_1 = 44;
    var numero2 = 55;
    console.log("Este es el valor del let y el var dentro del ciclo ", numero1_1, numero2);
}
console.log("aqui toma el numero2 como var global pero no el let ", numero1, numero2);
