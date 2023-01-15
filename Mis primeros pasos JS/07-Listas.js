//Listas

// Definición de una lista con tipo de dato alfanúmerico
const ciudadesDisponibles= new Array("Bogota","Lima", "Santiago");
console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles= ["Colombia","Perú","Chile","Brasil","Argentina"];
console.log(paisesDisponibles);

{
    ciudadesDisponibles.push("Montevideo");
    paisesDisponibles.push("Uruguay");

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);


}


{
    ciudadesDisponibles.unshift("Quito");
    paisesDisponibles.unshift("Ecuador");

    console.log(ciudadesDisponibles);
    console.log(paisesDisponibles);


}

//Posiciones
//Primer elemento de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

//Splice
paisesDisponibles.splice(1,2,"Venezuela","Paraguay");
console.log(paisesDisponibles);


