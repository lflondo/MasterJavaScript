var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase (Molde del objeto)
var Camiseta = /** @class */ (function () {
    //Metodos(Funciones o acciones del objeto)
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    return Camiseta;
}());
//Clase hija
var Chaqueta = /** @class */ (function (_super) {
    __extends(Chaqueta, _super);
    function Chaqueta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chaqueta.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Chaqueta.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Chaqueta;
}(Camiseta));
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
var camiseta = new Camiseta("Verde", "manga corta", "Nike", "M", 12);
console.log(camiseta);
var chaqueta = new Chaqueta("Negra", "Cuero", "Adidas", "XL", 30);
chaqueta.setCapucha(true);
console.log(chaqueta);
