// Constante
// Espacio de memoria que luego de asignar su valor no cambia en el tiempo.
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "LaCruz";

console.log(nombrePasajero);
console.log(apellidoPasajero);

// Let
// Espacio de memoria que puede cambiar durante la ejecución del programa

let nombreCompletoPasajero= nombrePasajero + " " + apellidoPasajero;
console.log(nombreCompletoPasajero);

// Var
// Espacio de memoria que puede cambiar durante la ejecución del programa
// El alcance total
var nombreCompletoDelPasajero= nombrePasajero + " " + apellidoPasajero;


//Bloque
{
    let nombreCompletoPasajero1= nombrePasajero + " " + apellidoPasajero;
    console.log("Variable con let: " + nombreCompletoPasajero);
    console.log("Variable con var: " + nombreCompletoDelPasajero);
}

// console.log("Variable con let: " + nombreCompletoPasajero1);
console.log("Variable con var: " + nombreCompletoDelPasajero);