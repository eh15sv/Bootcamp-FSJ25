/*

EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos.

*/

class Cuenta{
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numCuenta: number;

    constructor(nombreParam,cantidadParam,tipoCuentaParam, numcuentaParam){
        this.nombre=nombreParam;
        this.cantidad=cantidadParam;
        this.tipoCuenta=tipoCuentaParam;
        this.numCuenta=numcuentaParam;
    }

    //metodo depositar en cuenta

    depositar(cantidadParam:number):void{
        if (cantidadParam<5) {
            console.log("El valor a depositar debe ser mayor a $ 5.00");
        }else{
            this.cantidad += cantidadParam;
            console.log(`Se ha completado correctamente el deposito de ${cantidadParam}`);
        }
    }

    //metodo retirar de la cuenta
    retirar(valor: number): void {
        if (valor > this.cantidad) {
            console.log("Verifica tu cuenta, no tienes  suficientes fondos en la cuenta.");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor}. Le queda $${this.cantidad} en su cuenta.`);
        }
    }

    // Método para mostrar los datos de la cuenta
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Número de Cuenta: ${this.numCuenta}`);
    }
}


// Ejemplo de uso
const miCuenta = new Cuenta('Jorge Gonzalez', 50, 'Ahorros', 'AA001SV');
miCuenta.mostrarDatos();
miCuenta.depositar(15);
miCuenta.retirar(23);
miCuenta.retirar(4);
miCuenta.retirar(62);