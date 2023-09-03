// 3 chicos de 23 años
// heladeria a comprar un helado
// los precios no estan al lado de su respectivo helado
// eLLOS QUIERES comprar el helado mas caro que puedan con el dinero que tiene
// si hay dos helados o mas con el mismo precio mostrarlo
//  indicarle cuanto es lo devuelta

// si le alcanza el dinero para comprar un boleto de loteria lo compra
// si le alcanza dos compra dos
// si le alcanza 3 y sobra Regala el vuelto
// debe mostrar que compro y el vuelto

// 1 = si esta mintiendo 2 = en caso de que este diciendo la verdad 3 = en caso de indecision

// Mientras en el barrio sucedio un asesinato y habian 3 sospechosos

// si miente le dan una descarga electrica
// si no miente no hacer nada
// si el aparato no se decide, Aclarar que la pregunta debe ser mas concreta

/*
    3 Chicos de 23 años perfectamente birnakes entran a iuna heladeria a c omprar un helado
    pero hay un problema, los precios no estan al lado de cada estante con su respectivo helado
    ellos quieren comprar el helado mas caro que pueden comprar con el dinero que tienen
    cada uno tiene una distinta cantidad de dinero y hay una tabla en la que podemos basarnos el costo para saber el costo de cada helado

    Solucion
    ingresar el monto y mostrar el helado mas caro que puedan comprar
    si hay 2 o mas con el mismo precio mostrar ambos 
    indicar el vuelto
*/

/*  
    Roberto tiene $1.5 USD
    Pedro tiene $1.7 USD
    Mafe tiene $3 USD

    Los precios de los helados son:
        Palito de Helado de Agua: $2789 USD
        Palito de Helado de Crema: $1 USD
        Bombom helado marca heladix: $1.6 USD
        Bombom helado marca heladovich: $1.7 USD
        Bombom helado marca helardo: $1.8 USD
        Potecido de helado con confites: $2.9 USD
        Potecido DE 1/4 KG : $2.9 USD


        1:47:36
*/

var dineroRoberto = prompt("Registra por favor el dinero que tienes Roberto");
var dineroPedro = prompt("Registra por favor el dinero que tienes Pedro");
var dineroMafe = prompt("Registra por favor el dinero que tienes Mafe");

var helNomb1 = "Palito de Helado de Agua: ";
var helNomb2 = "Palito de Helado de Crema: ";
var helNomb3 = "Bombom helado marca heladix: ";
var helNomb4 = "Bombom helado marca heladovich: ";
var helNomb5 = "Bombom helado marca helardo: ";
var helNomb6 = "Potecito de helado con confites: ";
var helNomb7 = "Potecito de 1/4 Kg : ";

var helPrecio1 = 2789;
var helPrecio2 = 2789;
var helPrecio3 = 7437;
var helPrecio4 = 7902;
var helPrecio5 = 8367;
var helPrecio6 = 13480;
var helPrecio7 = 13480;

if (
  helPrecio1 >= helPrecio2 &&
  helPrecio1 >= helPrecio3 &&
  helPrecio1 >= helPrecio4 &&
  helPrecio1 >= helPrecio5 &&
  helPrecio1 >= helPrecio6 &&
  helPrecio1 >= helPrecio7
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb1} Con un valor de ${helPrecio1} Dolares`
  );
}
if (
  helPrecio2 >= helPrecio1 &&
  helPrecio2 >= helPrecio3 &&
  helPrecio2 >= helPrecio4 &&
  helPrecio2 >= helPrecio5 &&
  helPrecio2 >= helPrecio6 &&
  helPrecio2 >= helPrecio7
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb2} Con un valor de ${helPrecio2} Dolares`
  );
}
if (
  helPrecio3 >= helPrecio1 &&
  helPrecio3 >= helPrecio2 &&
  helPrecio3 >= helPrecio4 &&
  helPrecio3 >= helPrecio5 &&
  helPrecio3 >= helPrecio6 &&
  helPrecio3 >= helPrecio7
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb3} Con un valor de ${helPrecio3} Dolares`
  );
}
if (
  helPrecio4 >= helPrecio1 &&
  helPrecio4 >= helPrecio3 &&
  helPrecio4 >= helPrecio2 &&
  helPrecio4 >= helPrecio5 &&
  helPrecio4 >= helPrecio6 &&
  helPrecio4 >= helPrecio7
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb4} Con un valor de ${helPrecio4} Dolares`
  );
}
if (
  helPrecio5 >= helPrecio1 &&
  helPrecio5 >= helPrecio3 &&
  helPrecio5 >= helPrecio4 &&
  helPrecio5 >= helPrecio2 &&
  helPrecio5 >= helPrecio6 &&
  helPrecio5 >= helPrecio7
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb5} Con un valor de ${helPrecio5} Dolares`
  );
}
if (
  helPrecio6 >= helPrecio1 &&
  helPrecio6 >= helPrecio3 &&
  helPrecio6 >= helPrecio4 &&
  helPrecio6 >= helPrecio5 &&
  helPrecio6 >= helPrecio2 &&
  helPrecio6 >= helPrecio7
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb6} Con un valor de ${helPrecio6} Dolares`
  );
}
if (
  helPrecio7 >= helPrecio1 &&
  helPrecio7 >= helPrecio3 &&
  helPrecio7 >= helPrecio4 &&
  helPrecio7 >= helPrecio5 &&
  helPrecio7 >= helPrecio6 &&
  helPrecio7 >= helPrecio2
) {
  alert(
    ` El Helado mas caro hasta el momento es ${helNomb7} Con un valor de ${helPrecio7} Dolares`
  );
}

document.write(` 
    Helado 1 : ${helNomb1} ${helPrecio1} USD<br>
    Helado 2 : ${helNomb2} ${helPrecio2} USD<br>
    Helado 3 : ${helNomb3} ${helPrecio3} USD<br>
    Helado 4 : ${helNomb4} ${helPrecio4} USD<br>
    Helado 5 : ${helNomb5} ${helPrecio5} USD<br>
    Helado 6 : ${helNomb6} ${helPrecio6} USD<br>
    Helado 7 : ${helNomb7} ${helPrecio7} USD<br>
`);

var seleccion = prompt(
  "Que Helado Deseas Comprar Mafe Tenga en cuenta las mayusculas y minusculas"
);

if (seleccion === "Helado 1") {
  var saldoMafe = dineroMafe - helPrecio1;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb1} por un valor de ${helPrecio1} y el cambio que va recibir es de ${saldoMafe}`
  );
} else if (seleccion === "Helado 2") {
  var saldoMafe = dineroMafe - helPrecio2;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb2} por un valor de ${helPrecio2} y el cambio que va recibir es de ${saldoMafe}`
  );
} else if (seleccion === "Helado 3") {
  var saldoMafe = dineroMafe - helPrecio3;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb3} por un valor de ${helPrecio3} y el cambio que va recibir es de ${saldoMafe}`
  );
} else if (seleccion === "Helado 4") {
  var saldoMafe = dineroMafe - helPrecio4;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb4} por un valor de ${helPrecio4} y el cambio que va recibir es de ${saldoMafe}`
  );
} else if (seleccion === "Helado 5") {
  var saldoMafe = dineroMafe - helPrecio5;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb5} por un valor de ${helPrecio5} y el cambio que va recibir es de ${saldoMafe}`
  );
} else if (seleccion === "Helado 6") {
  var saldoMafe = dineroMafe - helPrecio6;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb6} por un valor de ${helPrecio6} y el cambio que va recibir es de ${saldoMafe}`
  );
} else if (seleccion === "Helado 7") {
  var saldoMafe = dineroMafe - helPrecio7;
  document.write(
    `Compraste con tu Dinero ${dineroMafe} la compra de ${helNomb7} por un valor de ${helPrecio7} y el cambio que va recibir es de ${saldoMafe}`
  );
} else {
  document.write(
    "No se Selecciono ningun Helado correspondiente 'Helado 1 - Helado 2 - Helado 3, etc'"
  );
}
