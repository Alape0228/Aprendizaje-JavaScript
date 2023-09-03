/*
    Switch:
        Permite multiples caminos a partir de la evaluacion de una sola expresion/condicion
*/

var color = prompt("Ingrese un color");

// prompt("") = sirve para interactuar con el usuario y este le permita digitar 

switch (color) {
    case "rojo":
        console.log("Esto quiere decir que elegiste el color Rojo exactamente")
        break;

    case "Amarillo":
        console.log("Esto quiere decir que elegiste el color Amarillo exactamente")
        break;

    case "Azul":
        console.log("Esto quiere decir que elegiste el color Azul exactamente")
        break;

    case "Blanco":
        console.log("Esto quiere decir que elegiste el color Blanco exactamente")
        break;    

    default:
        console.log("las opciones son Rojo, Amarillo, Azul y Blanco. Asegurate de haber escrito exactamente alguna de las anteriores opciones");
        break;
}

