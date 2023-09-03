/*
    Arrays:
        Son objetos para guardar muchos datos a diferencia de una variable
         


*/

var frutas = ["Banano","Durazno","Papaya","Manzana","Pera"];

document.write(frutas + "<br>");

document.write(frutas[3] + "<br>");


// Arrays Asociativos

var pc1 = {
    nombre: "DavidPc",
    procesador: "Intel Core I3",
    ram: "16GB",
    espacio: "1TB"
}

var pc2 = ["DavidPc","Intel Core I3","16GB","1TB"];

document.write(pc1["nombre"]+ "<br>");
document.write(pc1["procesador"] + "<br>");
document.write(pc1["ram"] + "<br>");
document.write(pc1["espacio"] + "<br>");

var ejem1 = pc1["nombre"];
var ejem2 = pc1["procesador"];
var ejem3 = pc1["ram"];
var ejem4 = pc1["espacio"];

alert(ejem3);