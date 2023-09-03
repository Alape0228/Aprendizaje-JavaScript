/*
    ////////////////////////////////////////////    METODOS    //////////////////////////////////////////// 

    Math    = Es un objeto
*/

document.write("<h3> Ejemplo numero 1 sqrt() </h3>");
document.write("Raiz cuadrada de 25 : ");
ejemplo1 = Math.sqrt(25);
document.write(ejemplo1);
/*
    sqrt()
        Devuelve la raiz cuadrada positiva de un numero
*/

document.write("<h3> Ejemplo numero 2 cbrt() </h3>");
document.write("Raiz cubica de 25 : ");
ejemplo2 = Math.cbrt(25);
document.write(ejemplo2);
/*
    cbrt()
        Devuelve la raiz cubica de un numero
*/

document.write("<h3> Ejemplo numero 3 max() </h3>");
document.write("El numero maximo o mayor de 2 a 15 es : ");
ejemplo3 = Math.max(7,8,5,2,15,6);
document.write(ejemplo3);
/*
    max()
        * Devuelve el mayor de cero o mas numeros
        * Solo recibe numeros.
*/

document.write("<h3> Ejemplo numero 4 min() </h3>");
document.write("El numero minimo o menor de 2 a 15 es : ");
ejemplo4 = Math.min(7,8,5,2,15,6);
document.write(ejemplo4);
/*
    min()
        * Devuelve el mas pequeño de cero o mas numeros.
        * Solo recibe numeros.
*/

document.write("<h3> Ejemplo numero 5 random() </h3>");
document.write("Numero aleatorio de 0 a 20 : ");
ejemplo5 = Math.random()*20;
document.write(ejemplo5);
/*
    random()
        * Devuelve un numero pseudo-aleatorio entre 0 y 1
        * Si no se ponen parametros calculara entre 0 a 1 (0.15,0.95) etc...
        * 
*/

document.write("<h3> Ejemplo numero 6 round() </h3>");
document.write("Redondear el numero anterior : ");
ejemplo6 = Math.round(ejemplo5);
document.write(ejemplo6);
/*
    round()
        Devuelve el valor de un numero redondeado al numero entero mas cercano.
*/

document.write("<h3> Ejemplo numero 7 floor() </h3>");
ejem7 = 25.9;
document.write("Numero a comparar : " + ejem7 + "<br>");
ejemplo7 = Math.floor(ejem7);
document.write(ejemplo7);
/*
    floor()
        * Devuelve el mayor entero menor que o igual a un numero 
        * Redondear el numero mas inferior o menor anterior
*/

document.write("<h3> Ejemplo numero 8 trunc() </h3>");
ejem8 = 72.9876;
document.write("Numero a comparar : " + ejem8 + "<br>");
ejemplo8 = Math.trunc(ejem8);
document.write(ejemplo8);
/*
    trunc()
        Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios.
        * No redondea el numero si no que eliminar los decimales despues del . 
        * Ejm 12.98 = a 12 no a 13
*/


document.write("<h3> Como hacer un numero aleatorio entre dos numeros </h3>");

// function numeroAletorio(min,max) {
//     return Math.round(Math.random() * (max - min)) + min;
// }
// document.write(numeroAletorio(100,200));



let numeroAletorio = Math.round(Math.random() * (500 - 400)) + 400;
document.write(numeroAletorio);