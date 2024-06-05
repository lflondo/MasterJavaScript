'use strict'

/* 
* Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario.
*/ 


var numero1 = parseInt(prompt("Ingrese el primer numero"));
var numero2 = parseInt(prompt("Ingrese el segundo numero"));


document.write("<h1>De "+numero1+" a "+numero2+" estos son los numero impares que hay </h1>")
// *este es con ciclo for
/*for(var i= numero1; i< numero2; i++){
    if(i%2 != 0){
        document.write(i +"<br>")
    } 
}*/

//* este es con ciclo while

while(numero1<numero2){
    numero1++;

    if(numero1%2 !=0){
        document.write("el numero "+numero1+" es impar <br>")
    }
}
