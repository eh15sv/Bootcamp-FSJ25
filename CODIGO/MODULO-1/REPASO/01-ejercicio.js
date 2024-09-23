


const miNumero = 5;

function positoNegativoCero(numero) {
    //let respuesta
    if (numero>0) return `El numero ${numero} es positivo`
    if (numero == 0) return `El numero es igual a cero`
    return `El numero ${numero} es negativo`
        
}

console.log(positoNegativoCero(miNumero));
console.log(positoNegativoCero(0));
console.log(positoNegativoCero(-3));


