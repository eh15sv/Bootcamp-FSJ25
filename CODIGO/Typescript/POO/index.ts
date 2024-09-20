//Programacion orientada a objetos
//Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

//Conceptos Principales de POO -> Clases y los Objetos
//Clases -> Molde para generar algo
//Objeto -> Lo que podemos crear en base a ese molde

//Declaracion de clase

class Auto{
    //Caracteristicas generales -> Propiedades o atributos
    numChasis: number;
    tipoMotor: string;
    color: string;
    tipoCombustible: string;
    tipoTransmision: string;
    cantKilometraje: number;
    plazas: number;
    modelo: string;
    fechaFab: number;

    //Constructor -> Metodo reservado que nos sirve para instanciar objetos
    constructor(numChasisParam:number, tipoMotorParam: string, colorParam: string , tipoCombustibleParam: string, tipoTransmisionParam: string, cantKilometrajeParam: number, plazasParam: number, modeloParam:string, fechaFabParam:number){
    this.numChasis = numChasisParam;
    this.tipoMotor= tipoMotorParam;
    this.color=colorParam;
    this.tipoCombustible= tipoCombustibleParam;
    this.tipoTransmision= tipoTransmisionParam;
    this.cantKilometraje= cantKilometrajeParam;
    this.plazas= plazasParam;
    this.modelo= modeloParam;
    this.fechaFab= fechaFabParam;


    }


    //Metodos -> Acciones

    encender():void {
        console.log("Vehiculo encendido...listo");
    }

    apagar(): void {
        console.log("Vehiculo apagando");
    }



}


//Instanciar objetos a traves de una clase -> Crear un objeto
//autoUno.modelo="GTI"

let autoUno:Auto = new Auto(123456,"2.0 Turbo","Gris","Gasolina","Automatica",15000,5,"GTI",2024);

console.log(autoUno);




