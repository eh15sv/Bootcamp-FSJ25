
// Estructuras de CONTROL -> CONDICIONALES

// IF -> EVALUA CASOS VERDADEROS
// IF ELSE ->
/*
let condicion = true;

if(condicion){
    console.log("Este codigo se ejecuta en caso True");
}   else{
    console.log("Este codigo se ejecuta si es False");
}

/*
OPERADORES DE COMPARACION NUMERICOS
MAYOR QUE >
MENOR QUE <
MENOR O IGUAL <=
MAYOR O IGUAL >=
*/
/*
if( 10>20 ){
    console.log("Tenes razon");
} else{
    console.log("Negativo 3312");   
}

//Operador ternario -> REEMPLAZO DE SINTAXIS PARA EL IF ELSE

//CONDICION ? CODIGO TRUE : CODIGO FALSE
10<10? console.log("Afirmativo"):console.log("Negativo");

//IF ELSEIF
let variableAux = 3;
if (variableAux>10) {
    console.log("Afirmativo");
    
}else if (variableAux>5) {
    console.log("Afirmativo");
    
}else{
    console.log("No cumplio las expectativas");
    
}
// Estructuras repetitivas o Bucles

//WHILE -> MIENTRAS
//WHILE (CONDICION DE CORTE) {CODIGO A EJECUTAR}
let numero = 1;
while (numero < 10) {
    console.log(numero);
    
}

//DO WHILE -> HACER MIENTRAS

let numero = 1;
do{
    console.log(numero);
    numero++;
    
}while (numero <10 && numero >=2) {
    
}

//FOR -> PARA
// for(INICIALIZACION ; CONDICION DE CORTE ; INCREMENTO / DECREMENTO) { CODIGO A EJECUTAR }

for (let numero = 1; numero < 10; numero++){
    console.log(numero);
    
}

*/
//Estructura de dato COMPLEJA
//ESTRUCTURA DE DATO SIMPLE let variable = "Erick";

//ARRAY
//let variableCompleja =[];
let cohorteFSJ25 = ["Erick", "Isis","Guille"]
//console.log(variableCompleja);
console.log(cohorteFSJ25);

//Metodos de arrays
//Agregar valores al final de un array
let variableCompleja=[];
variableCompleja.push("Jairo");
variableCompleja.push(26);
variableCompleja.push("Emilio")
console.log(variableCompleja);

//Eliminar el valor al final de un array
let datoEliminado = variableCompleja.pop();
console.log(variableCompleja);
console.log(datoEliminado);

//Agregar un valor al principio de un array
variableCompleja.unshift("Jorge");
console.log(variableCompleja);

//Eliminar un valor al principio de un array
let datoEliminadoPrincipio = variableCompleja.shift();
console.log(datoEliminadoPrincipio);

//PROPIEDAD DE ARRAY
//Averiguar el largo de un array

console.log("--- Largo del array ---");
console.log(variableCompleja);
let largor = variableCompleja.length;
console.log(largor);

