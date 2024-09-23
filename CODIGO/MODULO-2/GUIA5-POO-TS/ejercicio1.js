/*

EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.

*/
var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina(tituloParam, colorParam, fuenteParam, alineacionParam) {
        this.titulo = tituloParam;
        this.color = colorParam;
        this.fuente = fuenteParam;
        this.alineacion = alineacionParam;
    }
    //Metodo obtener titulo, color y fuente
    CabeceraPagina.prototype.obtenerDatos = function () {
        return {
            tituloParam: this.titulo,
            colorParam: this.color,
            fuenteParam: this.fuente,
        };
    };
    //Metodo para alinear titulo, con tres opciones
    CabeceraPagina.prototype.alineacionTitulo = function (alineacionParam) {
        this.alineacion = alineacionParam;
    };
    //Metodo imprimir todas la propiedades
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("T\u00EDtulo: ".concat(this.titulo));
        console.log("Color: ".concat(this.color));
        console.log("Fuente: ".concat(this.fuente));
        console.log("Alineaci\u00F3n: ".concat(this.alineacion));
    };
    return CabeceraPagina;
}());
//Datos de uso
var pagina = new CabeceraPagina('Kodigo ejercicio 1', 'Rojo', 'Verdana', 'Derecha');
pagina.alineacionTitulo('izquierda');
pagina.imprimirPropiedades();
