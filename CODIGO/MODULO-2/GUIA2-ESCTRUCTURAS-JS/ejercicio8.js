/*
EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado por el usuario.
*/

function tablaMultiplicar(numeroParam) {
    for (let i = 1; i<= 10; i++) {
        console.log(`${numeroParam} x ${i} = ${numeroParam * i}`);
        
    }
    
}

//Datos de uso

let numero = 2;

tablaMultiplicar(numero);