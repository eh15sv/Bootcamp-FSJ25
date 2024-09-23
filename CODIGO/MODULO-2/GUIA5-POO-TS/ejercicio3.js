/*

EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.

*/
var Cancion = /** @class */ (function () {
    function Cancion(tituloParam, generoParam) {
        this.titulo = tituloParam;
        this.genero = generoParam;
        this.autor = '';
    }
    //getter y setter
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    //mostrar los datos
    Cancion.prototype.mostrarDatos = function () {
        console.log("Titulo: ".concat(this.titulo));
        console.log("Genero: ".concat(this.genero));
        console.log("Autor: ".concat(this.autor));
    };
    return Cancion;
}());
//Datos de uso
var canción = new Cancion('Himno Nacional', 'Oficial');
canción.setAutor('Juan Jose Cañas');
canción.mostrarDatos();
