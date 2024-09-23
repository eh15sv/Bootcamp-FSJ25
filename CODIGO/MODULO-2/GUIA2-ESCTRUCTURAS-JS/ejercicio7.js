/*

EJERCICIO 7:
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.

*/

function valoresEnteros(numerosParam) {
    let numNegativosParam=0;
    let numPositivosParam=0;
    let numMultiplosQuince=0;
    let acumuladoNumPares=0;

    for (let i = 0; i < numerosParam.length; i++){
        let numeroParam = numerosParam[i];

        if (numeroParam<0) {
            numNegativosParam++;
        }else if(numeroParam>0){
            numPositivosParam++;
        }
        if (numeroParam % 15 === 0) {
            numMultiplosQuince++;
        }
        if (numeroParam %2 === 0) {
            acumuladoNumPares+= numeroParam;
            
        }
    }

    console.log("Valores negativos ingresados: "+ numNegativosParam);
    console.log("Valores positivos ingresados: "+ numPositivosParam);
    console.log("Valores multiplos de 15 ingresados: "+ numMultiplosQuince);
    console.log("Valor acumulado de numeros pares ingresados: "+ acumuladoNumPares);

}

//Datos de uso

let numeros=[11, 15, 17, 23, 26, 27];
valoresEnteros(numeros);