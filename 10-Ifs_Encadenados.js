//IFs encadenados
let ciudadDestino ="Bogotá";
const ciudadesDisponibles=["Bogotá","Lima","Santiago","Montevisto"];
let edadPasajero=20;
let estaAcompanado=false;


edadPasajero=16;
estaAcompanado=false;
ciudadDestino="Lima"

console.log(`Verificando pasajes para  ${ciudadDestino}`);
if (edadPasajero >= 18 || estaAcompanado) {
    //Evaluamos si la ciudad esta disponible para viajar
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 ) {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Ciudad no disponible para viajar');
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log('Pasaje disponible para venta');
    } else {
        console.log('Pasajero no cumple las reglas');
    }
    
}
