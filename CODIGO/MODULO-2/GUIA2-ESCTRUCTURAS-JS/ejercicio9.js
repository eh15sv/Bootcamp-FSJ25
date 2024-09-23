/*

EJERCICIO 9:
Crear programa donde se introduce una temperatura en Celsius y salga el resultado en Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”

*/

function temperatura(tempParam) {
    return tempParam * 9/5 + 32;
    
}

function infoTemperatura(temFParam) {
    if (temFParam>=14 && temFParam<32) {
        return "Temperatura baja";
    }else if (temFParam>=32 && temFParam<68) {
        return "Temperatura adecuada";
    }else if (temFParam>=68 && temFParam<96) {
        return "Temperatura alta"
    }else{
        return "Temperatura desconocida"
    }
}

let tempCelcius = 15;
let tempFarenheit = temperatura(tempCelcius);
let mensaje = infoTemperatura(tempFarenheit);

console.log("La temperatura en Farenheit es: " + tempFarenheit);
console.log(mensaje);
