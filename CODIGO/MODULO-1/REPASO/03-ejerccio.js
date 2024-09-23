
tipoVehiculo = "Lancha"

function costoPasaje(tipoVehiculo) {
    let impuesto = 0
switch (tipoVehiculo) {
    
    case "Particular":
        impuesto="El impuesto a pagar por el tipo de vehiculo: "+ tipoVehiculo + "es $ 0.75";
        break;
    case "Autobus":
        impuesto="El impuesto a pagar por el tipo de vehiculo: " + tipoVehiculo + " es $1.50";
        break
    case "Microbus":
        impuesto="El impuesto a pagar por el tipo de vehiculo: " + tipoVehiculo + " es $ 1.25";
        break
    case "Mototaxi":
        impuesto="El impuesto a pagar por el tipo de vehiculo: " + tipoVehiculo + " es $ 0.50";
        break
    case "Moto":
        impuesto="El impuesto a pagar por el tipo de vehiculo: " + tipoVehiculo + " es $ 0.30";
        break
    case "Otros":
        impuesto="El impuesto a pagar por el tipo de vehiculo: " + tipoVehiculo + " es $ 3.00";
        break
    default:
        impuesto="El tipo de vehiculo: " + tipoVehiculo + " no esta ingresado correctamente";
        
        break;
}
    return impuesto;
}

console.log(costoPasaje(tipoVehiculo));
