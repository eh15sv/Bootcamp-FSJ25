/*

EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial

*/
var Calculadora = /** @class */ (function () {
    function Calculadora(number1Param, number2Param) {
        this.number1 = number1Param;
        this.number2 = number2Param;
    }
    Calculadora.prototype.suma = function () {
        return this.number1 + this.number2;
    };
    Calculadora.prototype.resta = function () {
        return this.number1 - this.number2;
    };
    Calculadora.prototype.multiplicacion = function () {
        return this.number1 * this.number2;
    };
    Calculadora.prototype.division = function () {
        return this.number1 / this.number2;
    };
    Calculadora.prototype.potencia = function () {
        return Math.pow(this.number1, this.number2);
    };
    Calculadora.prototype.factorizar = function () {
        if (this.number1 === 0 || this.number2 === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= this.number1; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
//Datos de uso
var calculadora = new Calculadora(15, 8);
console.log("Sumar: ", calculadora.suma());
console.log("Restar: ", calculadora.resta());
console.log("Multiplicar: ", calculadora.multiplicacion());
console.log("Dividir: ", calculadora.division());
console.log("Potenciar: ", calculadora.potencia());
console.log("Factorizar: ", calculadora.factorizar());
