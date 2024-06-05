'use strict'

//Parametros REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...restoDeFrutas){
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    //REST
    console.log(restoDeFrutas);
}
listadoFrutas("Mango", "Pera", "Melon","Uva", "Sandia", "Coco")

//SPREAD

var  frutas =["Mango", "Pera"]
listadoFrutas(...frutas, "Melon","Uva", "Sandia", "Coco")