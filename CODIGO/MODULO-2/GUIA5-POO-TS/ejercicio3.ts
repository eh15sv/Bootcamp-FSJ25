/*

EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.

*/

class Cancion{
    titulo:string;
    genero: string;
    private autor:string;

    constructor(tituloParam, generoParam){
        this.titulo=tituloParam;
        this.genero=generoParam;
        this.autor='';
    }

    //getter y setter

    getAutor():string{
        return this.autor
    }

    setAutor(autor:string):void{
        this.autor=autor;
    }

    //mostrar los datos

    mostrarDatos():void{
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Genero: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}

//Datos de uso
const canción = new Cancion('Himno Nacional','Oficial');
canción.setAutor('Juan Jose Cañas');
canción.mostrarDatos();