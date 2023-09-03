/*
David reprobo 2 materias
debe enviar un formulario para registrarse en las mesas de examenes par aintenter aprobarlas

Instrucciones:
1- Formulario con 
    * nombre
    * email
    * materia adeudada
2- Validar mails y nombres
3- enviar al servidor de manera pulida

toUpperCase()
*/

let cc1110589231 = {
    nombre : "JOSE DAVID ALAPE DELGADO",
    correo : "JOSEDAVID112009@GMAIL.COM",
    materia : ["MATEMATICAS", "ESPAÑOL"]
};

// console.log(cc1110589231["nombre"])

// Ciclo para recorrer las materias
// for (let i in cc1110589231["materia"]) {
//     console.log(cc1110589231["materia"][i]);
// }

let form_contenedor = document.querySelector(".form_contenedor");
let form_titulo = document.querySelector(".form_titulo");
let input_nombre = document.querySelector(".input_nombre");
let input_email = document.querySelector(".input_email");
let input_materia = document.querySelector(".input_materia");
let boton = document.querySelector(".boton");
let resultado = document.querySelector(".resultado"); 

boton.addEventListener("click",(e)=>{
    // e.preventDefault() Si el boton fuese un input type submit evitamos con esto que la paguina cargue 
    let nombreIngresado = input_nombre.value.toUpperCase();
    let correoIngresado = input_email.value.toUpperCase();
    let materiaIngresado = input_materia.value.toUpperCase();

    if (nombreIngresado == cc1110589231["nombre"]) {
        console.log("Nombre correcto")
        if (correoIngresado == cc1110589231["correo"]) {
            console.log("correo correcto")
            for (let i in cc1110589231["materia"]) {
                if (materiaIngresado != cc1110589231["materia"][i]) {
                    console.log("No encontramos la materia en la base de datos") 
                }
                else{
                    console.log("Materia seleccionada correcta")
                }
            }
        }
        else{
            console.log("No encontramos El correo en la base de datos") 
        }
    }
    else{
        console.log("No encontramos tu nombre en la base de datos") 
    }

    // console.log(nombreIngresado);
    // console.log(correoIngresado);
    // console.log(materiaIngresado);
})

