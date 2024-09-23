//Programacion orientada a objetos
//Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
//Conceptos Principales de POO -> Clases y los Objetos
//Clases -> Molde para generar algo
//Objeto -> Lo que podemos crear en base a ese molde
//Declaracion de clase
var Auto = /** @class */ (function () {
    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    function Auto(numChasisParam, tipoMotorParam, colorParam, tipoCombustibleParam, tipoTransmisionParam, cantKilometrajeParam, plazasParam, modeloParam, fechaFabParam) {
        this.numChasis = numChasisParam;
        this.tipoMotor = tipoMotorParam;
        this.color = colorParam;
        this.tipoCombustible = tipoCombustibleParam;
        this.tipoTransmision = tipoTransmisionParam;
        this.cantKilometraje = cantKilometrajeParam;
        this.plazas = plazasParam;
        this.modelo = modeloParam;
        this.fechaFab = fechaFabParam;
    }
    //Metodos -> Acciones
    Auto.prototype.encender = function () {
        console.log("Vehiculo encendido...listo");
    };
    Auto.prototype.apagar = function () {
        console.log("Vehiculo apagando");
    };
    return Auto;
}());
//Instanciar objetos a traves de una clase -> Crear un objeto
//autoUno.modelo="GTI"
var autoUno = new Auto(123456, "2.0 Turbo", "Gris", "Gasolina", "Automatica", 15000, 5, "GTI", 2024);
console.log(autoUno);
