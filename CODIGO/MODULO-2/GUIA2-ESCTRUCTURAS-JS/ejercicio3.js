/*

EJERCICIO 3: 
CATEGORIA AUMENTO 
A 15%
B 30% 
C 10%
D 20%
Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento. Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y aumento. Deberá demostrar los datos del empleado y el aumento salarial.

*/

function calcularAumentoSalario(nombreParam, salarioParam, categoriaParam,) {
    //Definir segun la categoria el porcentaje a utilizar para el calculo
    switch (categoriaParam) {
        case 'A':
            aumentoParam = 0.15;            
            break;
        case 'B':
            aumentoParam = 0.30;            
            break;
        case 'C':
            aumentoParam = 0.10;            
            break;
        case 'D':
            aumentoParam = 0.20;            
            break;    
        default:
            console.log("Por favor revisar categoria ingresada, la opcion no es valida");
            return;
    }
    //Calcular el aumento salarial

    let aumentoSalario=salarioParam*aumentoParam;
    let salarioActualizado=salarioParam + aumentoSalario;

    console.log("Nombre del Empleado: " + nombreParam);
    console.log("Tiene la categoria " + categoriaParam + " su aumento es del " + ((aumentoParam)*100) +" % y su salario actualizado sera: $" + salarioActualizado);
    
}

//Datos para uso

let nombreEmpleado = "David Robinson";
let salarioEmpleado = 500;
let categoriaAumentoEmpleado = "A";

calcularAumentoSalario(nombreEmpleado,salarioEmpleado,categoriaAumentoEmpleado);
