//Otras funciones listas

const ciudadesDisponibles= new Array("Bogota","Lima", "Santiago","Montevideo");
//console.log(ciudadesDisponibles);

//Definición de una lista de forma abreviada
const paisesDisponibles= ["Colombia","Perú","Chile","Brasil","Argentina", "Uruguay","Venezuela"];
//console.log(paisesDisponibles);

const cantidadCiudades= ciudadesDisponibles.length;
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos.`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos.`);


//Eliminando elementos
//Remover el primer elemento
ciudadesDisponibles.shift();
//Remover el último elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);

//Filtrar elementos
const paisesFiltrados=paisesDisponibles.filter((e) => e.length>6);
console.log(paisesFiltrados);

const paisesFiltrados1=paisesDisponibles.filter((e) => e=="Brazil");
console.log(paisesFiltrados1);

//Cambiar lista a cadena de caracteres (Unificación)
console.log(paisesDisponibles.join("-"));

// Ordenar elementos
console.log(paisesDisponibles.sort())


//Conociendo la posición de un elemento
console.log(`Perú está en la posición ${paisesDisponibles.indexOf('Perú')}`);

//Unificar dos listas
const listaPaisesCiudades=paisesDisponibles.concat(ciudadesDisponibles);

console.log(listaPaisesCiudades);