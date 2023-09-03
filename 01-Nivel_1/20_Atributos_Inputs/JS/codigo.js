/*
    Esto es para modificar o cambiar o agregar atributos a un elemento INPUT
    

    Atributos de Inputs
        Para Estos casos se llama directamente el nombre de la variable.los atributos de los inputs
        por que esta ves vamos acceder a los atributos directamente desde javascript
        y no estaremos usando el metodo un metodo que acceda a un atributo
            *className
            *value
            *type
            *accept
            *form
            *minLength
            *placeholder
            *required
    recordar que se puede usar element.getAttribute() no documentx
*/

let input1 = document.querySelector(".input1");
document.write(input1.className + "<br>")
// Esto me retorna el valor o lo que contenga el atributo class


let input2 = document.querySelector(".input2");
document.write(input2.value + "<br>")
// Esto me retorna lo que contenta o haya captura el input

let input3 = document.querySelector(".input3");
document.write(input3.type="range")
// Sirve para modificar el type del input
// retorna el nombre del atributo

let input4 = document.querySelector(".input4");
document.write(input4.accept = "image/png")
// Sirve para poner la condicion de que solo reciba imagenes o lo que se ponga como valor
// retorna el nombre del atributo

let input5 = document.querySelector(".input5");
document.write(input5.form = "formulario")

let input6 = document.querySelector(".input6");
document.write(input6.minLength = 10)
// Minima cantidad de caracteres Con L mayuscula camelcasse
// Para que bote el error es necesario colocar menos caracteres de 10
// Devuelve el valor 10

let input7 = document.querySelector(".input7");
document.write(input7.placeholder = "Hola que hace")
// Sirve para poner un texto que no se puede editar dentro del input
// devuelve el valor que se ponga 

let input8 = document.querySelector(".input8");
document.write(input8.required = "true")
// pone como requerido llenar el campo para enviar datos al formulario 


// Atributos Style
let titulo = document.querySelector(".titulo");
titulo.style.color = "red";
titulo.style.backgroundColor = "black";