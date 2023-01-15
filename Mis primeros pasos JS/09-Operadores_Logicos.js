//Operadores de comparación
const ciudadDestino ="Bogotá";
const ciudadesDisponibles=["Bogotá","Lima","Santiago","Montevisto"];

//Palabra reservada if
// Evalua una condición
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino)>= 0){
    console.log('Pasaje disponible para venta');
}
else {
    console.log('Ciudad no disponible para viajar');
}

const valorPasaje=1000;
if (valorPasaje ==1000){
    console.log('El pasaje vale 1000.');
}

//Operadores lógicos
// Y (AND)= &&  Se deben de cumplir las dos condiciones
// O (OR)=||  Se debe cumplir al menos una condición
// NO (NOT)= !  No se cumple la condición

const edadPasajero=19;

if (edadPasajero>=18){
    console.log("El pasajero es mayor de edad.")
}

if (ciudadesDisponibles.indexOf(ciudadDestino)>= 0 || edadPasajero>=18){
    console.log("Una condición se cumple.")
}