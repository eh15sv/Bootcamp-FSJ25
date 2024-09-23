//Declaracion de variable en JS
let variable = "Emilio";

//Declaracion de variable + TIPO DE DATO es TS
let cadenaTexto:string = "Emilio";
let numero:number=1.5;
let boleano:boolean= false;

//Declaracion de array
let arraycito:string [] = ["Alianza","Bayern","ES"];

let arrayNumerico:number[]=[15,17,26,27];

//NUNCA UTILIZAR ESTO
let arrayMalo:any[]=["letra",22,false];

//Array numerico o string
let arrayNumString:number [] | string [] = [""];
let arrayNumOString:(number | string) []=  ["Pantalla", 2, "Monitor", 4]

//Declaracion de Tuplas -> Es un array con indices limitados y  con sus tipos de datos declarados previamente
let datoUsuario:[string,number];
datoUsuario = ["Emilio",40];


//Funciones en TS
function tipoVoid():void {
    console.log("Salida de funcion void"); 
}

function sumar():number {
    return 2+2;   
}

function sumarOConcatenar(): number | string{
    return 3+5;
}

function saludar(nombre:string):string {
    //Template String -> Plantillas literales -> Ingresar un dato de JS en un STRING
    //"Hola como estas"+nombre;
    
    return `Hola como estas? ${nombre} `

}

console.log(saludar("Emilio"));