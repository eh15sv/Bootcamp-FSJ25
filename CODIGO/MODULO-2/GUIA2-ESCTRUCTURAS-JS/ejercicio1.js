/*
INDICACIONES: Resolver los siguientes ejercicios utilizando estructuras de control con JavaScript.
EJERCICIO 1: Crear una función que en base a la edad que ingreso el usuario devolver un mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
*/

function validadEdad(edad){
    return edad>=18 ? "Segun la edad ingresada es MAYOR de edad." : "Segun la edad ingresada es MENOR  de edad";
}

let edadUsuario=15;
console.log(validadEdad(edadUsuario));