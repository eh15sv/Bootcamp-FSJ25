//Declaracion de variable en JS
var variable = "Emilio";
//Declaracion de variable + TIPO DE DATO es TS
var cadenaTexto = "Emilio";
var numero = 1.5;
var boleano = false;
//Declaracion de array
var arraycito = ["Alianza", "Bayern", "ES"];
var arrayNumerico = [15, 17, 26, 27];
//NUNCA UTILIZAR ESTO
var arrayMalo = ["letra", 22, false];
//Array numerico o string
var arrayNumString = [""];
var arrayNumOString = ["Pantalla", 2, "Monitor", 4];
//Declaracion de Tuplas -> Es un array con indices limitados y  con sus tipos de datos declarados previamente
var datoUsuario;
datoUsuario = ["Emilio", 40];
//Funciones en TS
function tipoVoid() {
    console.log("Salida de funcion void");
}
function sumar() {
    return 2 + 2;
}
function sumarOConcatenar() {
    return 3 + 5;
}
function saludar(nombre) {
    //Template String -> Plantillas literales -> Ingresar un dato de JS en un STRING
    //"Hola como estas"+nombre;
    return "Hola como estas? ".concat(nombre, " ");
}
console.log(saludar("Emilio"));
