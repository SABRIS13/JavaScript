// Switch
const ciudadesDisponibles = ["Bogotá", "Lima", "Santiago", "Montevisto"];
const ciudadDestino = "Lima";

let valorPasaje = 0;

console.log(`Verificando pasajes para  ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    // Condición con if
    /*
    if (ciudadDestino=="Bogotá"){
        valorPasaje=550;
    } else if (ciudadDestino=="Lima"){
        valorPasaje=440;
    }else if (ciudadDestino=="Santiago"){
        valorPasaje=200;
    }else if (ciudadDestino=="Montevideo"){
        valorPasaje=300;}
        */

    switch (ciudadDestino) {
        case "Bogotá":
            valorPasaje = 550;
            break;
        case "Lima":
            valorPasaje = 440;
            break;
        case "Santiago":
            valorPasaje = 200;
            break; case "Montevideo":
            valorPasaje = 300;
            break;
        default:
            valorPasaje = 0;
            break;
    }

    console.log(`El valor del pasaje es: ${valorPasaje}`);
} else {
    console.log("Ciudad no disponible para viajar. m")
}
