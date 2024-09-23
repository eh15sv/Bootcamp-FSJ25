/*

EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.

*/

abstract class Persona {
    nombre:string;
    apellido:string;
    direccion:string;
    telefono: number;
    edad: number;
    
    //metodo constructor para recibir datos
    constructor(nombreParam: string,apellidoParam: string,direccionParam: string, telefonoParam: number,edadParam: number) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.direccion = direccionParam;
        this.telefono = telefonoParam;
        this.edad = edadParam;
        
    }

    //metodo mostrar segun la edad si es mayor de edad o no

    mayorEdad():void{
        if(this.edad>=18){
            console.log("Es mayor de edad");
        }else{
            console.log("No es mayor de edad");
        }
    }

    //metodo abstracto 
    abstract mostrarDatos(): void;
}

    //clase Empleado va a heredar de Persona
    class Empleado extends Persona {
    public sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    // metodo para cargar el sueldo
    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
    }

    // Método para imprimir el sueldo
    imprimirSueldo(): void {
        console.log(`Tu sueldo es $${this.sueldo}.`);
    }

    //metodo abstracto para mostrar los datos personales
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

//Datos de uso
const empleado = new Empleado('Tony', 'Kroos', 'Alemania Munich 0008', 5032000000, 31, 15000);
empleado.mostrarDatos();
empleado.mayorEdad();
empleado.imprimirSueldo();