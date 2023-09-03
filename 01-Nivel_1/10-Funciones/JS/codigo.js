// la funcion no devuelve ningun tipo de dato solo sirve para crear funciones 

// el return debe ir a final ya que finaliza la funcion que es lo principal lo ultimo en que retorna la funcion

function saludar(){
    alert("Recuerda que esto lo haces por papa por ti y por tu gran amor maria fernanda");
    return "la funcion se ejecuto correctamente"
}

// saludar(); para llamar la funcion

let ejemplo = saludar();
// de esta manera almacenamos en una variable la funcion saludar
// let ejemplo es = a la funcion saludar y la funcion salduar es igual o retorna "la funcion se ejecuto correctamente

document.write(ejemplo);


document.write("<br><br>");


let num1 = 32;
let num2 = 12;

function suma() {
    let res = num1 + num2;
    document.write(res);
}
suma()

document.write("<br><br>");

// No se necesita declarar las variables ya que dentro de las funciones se hacen
// Las variables definidas dentro de la funcion no pueden se llamadas externamente ya que saldra como no definidas

function resta(num3,num4) { 
    let res2 = num3 - num4;
    document.write(res2);
}
resta(60,20)
resta(100,50)


document.write("<br><br>");
// otra manera de hacerlo

function mult(num5,num6) { 
    let res3 = num5 * num6;
    return res3;
}
// En una variable almacena lo que retorna la funcion

let resultado = mult(12,7);
document.write(resultado);

function saludar2(nombre){
    let frase = `Hola ${nombre} Como has estado el dia de hoy ?`
    document.write(frase);
}

saludar2("mafe");

//                            Funciones Flecha
//  Se remplaza la palabra funcion por =>
// Recordar que si la funcion la almacenara una variable el nombre solo importara el nombre de la variable
// si se crea una funcion sin ser almacenada en una variable hay que tener en cuenta que la funcion tenga un nombre
const variable = ()=>{

}

/*
    const saludar2 = (nombre)=>{
    let frase = `Hola ${nombre} Como has estado el dia de hoy ?`
    document.write(frase);
}
*/