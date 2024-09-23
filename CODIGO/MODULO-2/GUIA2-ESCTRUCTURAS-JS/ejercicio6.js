/*

EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino es Puerto el Triunfo el descuento será del 15%.

*/

function descuentoDestino(destinoParam) {
    let descuento;
    
    switch(destinoParam){
            case 'La Costa del Sol':
            descuento = 0.05;
            break;
            case 'Panchimalco':
            descuento = 0.10;
            break;
            case 'Puerto El Triunfo':
            descuento = 0.15;
            break;
            default:
            descuento = 0;
            return
        }
        console.log("El descuento para " + destinoParam + " es de : " + (descuento*100 + " %."));
        
}

//Datos para uso
let destinoTuristico = 'La Costa del Sol';
descuentoDestino(destinoTuristico);