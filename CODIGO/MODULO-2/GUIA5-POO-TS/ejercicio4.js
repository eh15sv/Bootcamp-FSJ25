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
var Cuenta = /** @class */ (function () {
    function Cuenta(nombreParam, cantidadParam, tipoCuentaParam, numcuentaParam) {
        this.nombre = nombreParam;
        this.cantidad = cantidadParam;
        this.tipoCuenta = tipoCuentaParam;
        this.numCuenta = numcuentaParam;
    }
    //metodo depositar en cuenta
    Cuenta.prototype.depositar = function (cantidadParam) {
        if (cantidadParam < 5) {
            console.log("El valor a depositar debe ser mayor a $ 5.00");
        }
        else {
            this.cantidad += cantidadParam;
            console.log("Se ha completado correctamente el deposito de ".concat(cantidadParam));
        }
    };
    //metodo retirar de la cuenta
    Cuenta.prototype.retirar = function (valor) {
        if (valor > this.cantidad) {
            console.log("Verifica tu cuenta, no tienes  suficientes fondos en la cuenta.");
        }
        else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else {
            this.cantidad -= valor;
            console.log("Ha retirado $".concat(valor, ". Le queda $").concat(this.cantidad, " en su cuenta."));
        }
    };
    // Método para mostrar los datos de la cuenta
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de Cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de Cuenta: ".concat(this.numCuenta));
    };
    return Cuenta;
}());
// Ejemplo de uso
var miCuenta = new Cuenta('Jorge Gonzalez', 50, 'Ahorros', 'AA001SV');
miCuenta.mostrarDatos();
miCuenta.depositar(15);
miCuenta.retirar(23);
miCuenta.retirar(4);
miCuenta.retirar(62);
