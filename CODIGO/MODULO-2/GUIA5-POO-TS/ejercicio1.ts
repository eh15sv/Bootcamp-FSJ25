/*

EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.

*/

class CabeceraPagina{
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: string;

    constructor(tituloParam:string, colorParam:string, fuenteParam:string, alineacionParam:string){
        this.titulo=tituloParam;
        this.color=colorParam;
        this.fuente=fuenteParam;
        this.alineacion=alineacionParam;
    }

    //Metodo obtener titulo, color y fuente
    obtenerDatos():{tituloParam:string, colorParam:string, fuenteParam:string}{
        return{
            tituloParam:this.titulo,
            colorParam:this.color,
            fuenteParam:this.fuente,
        }
    }

    //Metodo para alinear titulo, con tres opciones
    alineacionTitulo(alineacionParam:string):void{
        this.alineacion = alineacionParam;
    }

    //Metodo imprimir todas la propiedades
    imprimirPropiedades():void{
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }

}

//Datos de uso
const pagina = new CabeceraPagina('Kodigo ejercicio 1','Rojo','Verdana','Derecha');
pagina.alineacionTitulo('izquierda');
pagina.imprimirPropiedades();
