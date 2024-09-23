/*

EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial

*/

class Calculadora{
    private number1: number;
    private number2: number;

    constructor(number1Param:number, number2Param:number){
        this.number1 =number1Param;
        this.number2=number2Param;
    }

suma():number {
    return this.number1 + this.number2;
}

resta():number{
    return this.number1 - this.number2;
}

multiplicacion(): number{
    return this.number1 * this.number2;
}

division():number{
    return this.number1 / this.number2;
}

potencia():number{
    return Math.pow(this.number1, this.number2);
}

factorizar():number{
    if (this.number1===0 || this.number2===1){
        return 1;
    }
    let resultado=1;
    for(let i=2;i<=this.number1;i++){
        resultado *=i;
    }
    return resultado;
}
}

//Datos de uso
const calculadora = new Calculadora(15,8);
console.log("Sumar: ",calculadora.suma());
console.log("Restar: ",calculadora.resta());
console.log("Multiplicar: ",calculadora.multiplicacion());
console.log("Dividir: ",calculadora.division());
console.log("Potenciar: ",calculadora.potencia());
console.log("Factorizar: ", calculadora.factorizar());
