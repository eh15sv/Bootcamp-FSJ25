/*
EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario, calcular cual número es el mayor y devolverlo.
*/

function calcularNumeroMayor(num1Param, num2Param) {
    //Comparar los valores de los numeros
    if (num1Param>num2Param) {
        return num1Param;
    }else if(num2Param>num1Param){
        return num2Param;
    }else{
        return"Los numeros ingresados tienen el mismo valor";
    }
   
}

//Datos de uso
let numero1=15;
let numero2=8;

console.log("El numero mayor es " + calcularNumeroMayor(numero1, numero2));