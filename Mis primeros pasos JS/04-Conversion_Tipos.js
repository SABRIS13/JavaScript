// Tipos de datos
// Alfanúmericos
let nombrePasajero = "Pedro Silva";
nombrePasajero = "Ramón Silva";
// Si hubieramos usado const no podríamos cambiar el valor de la variable.

// Numérico
let valorBoleto =1650;
const porcentajeTasaEmbarque=60/100;
var gestionAgencia=120;

console.log(valorBoleto);

//Lógico (true,false)
let boletoActivo=true;

// Operaciones Aritméticas
//Suma 
let totalBoleto=valorBoleto+ gestionAgencia +100;
console.log(totalBoleto)

// Orden de precedencia ()> * y / > + y -
let totalBoletoForma2=valorBoleto+ valorBoleto*porcentajeTasaEmbarque+gestionAgencia +100;
console.log(totalBoletoForma2)

//Concatenación de texto
let nombre = "Rosa";
let apellido= "Torres";
let nombreCompleto= nombre + " " +apellido;

console.log(nombreCompleto);

// Conversion
let suma= parseInt("30")+ parseFloat("80");
console.log(suma);

