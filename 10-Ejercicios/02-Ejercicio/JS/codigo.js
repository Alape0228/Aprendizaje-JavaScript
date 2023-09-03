/*
DATOS DE COFLA Y EL RESTO DE ALUMNOS FUERON ALMACENADOS CORRECTAMENTE

crear un sistema para que los profesores visualicen la informacion y definir cuando los alumnos van a rendir

1- interfaz debe ser agradable y atractiva 
2- Debe contener todos los Datos de manera Estructurada
3- El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
4- Si el profesor confirma, los datos se deben actualizar y remplazar el espacio de seleccion de semana por la semana seleccionada
*/

let tabla = document.querySelector(".tabla")

let alumnos = [
    {
        nombre: "Jose David Alape Delgado",
        correo: "josedavid112009@gmail.com",
        materia: "Matematicas"
    },
    {
        nombre: "Maria Fernanda Florez Guzman",
        correo: "MariaFernanda@gmail.com",
        materia: "Fisica"
    },
    {
        nombre: "Rosa Emilia Delgado Ospina",
        correo: "RosaEmilia@gmail.com",
        materia: "Historia"
    },
    {
        nombre: "Jose Belkis Alape Rada",
        correo: "JoseBelkis@gmail.com",
        materia: "Matematicas"
    },
    {
        nombre: "Sara Salome Muñoz Fernandez",
        correo: "SaraSalome@gmail.com",
        materia: "Español"
    },
]

let boton = document.querySelector(".boton")







// console.log(alumnos[0])         //Accedo al array 0 COMPLETO del Estudiante jose David alape Delgado
// console.log(alumnos[0].nombre)  //Accedo al array 0 y finalmente accedo al nombre del estudiante

// for (const i in alumnos) {
//     console.log(alumnos[i].nombre);
// }

// for (const i in alumnos) {
//     console.log(alumnos[i].correo);
// }

// for (const i in alumnos) {
//     console.log(alumnos[i].materia);
// }

let fragmentoTablaAlumno = document.createDocumentFragment();
let fragmentoAlumno = document.createDocumentFragment();


for (const i in alumnos) {
    let divTablaAlumno = document.createElement("DIV"); //Se crea div 
    divTablaAlumno.classList.add("tabla_alumno");       //Se asigna la clase "tabla_alumno" 
    fragmentoTablaAlumno.appendChild(divTablaAlumno)    //Se almacena div en el fragmento "fragmentoTablaAlumno"

    let divNombre = document.createElement("DIV");      //Se crea div 
    divNombre.classList.add("tabla_alumno-nombre");     //Se asigna la clase "tabla_alumno-nombre" 
    fragmentoAlumno.appendChild(divNombre)              //Se almacena div creado en el fragmento "fragmentoAlumno"
    divNombre.textContent = alumnos[i].nombre;


    let divCorreo = document.createElement("DIV");      //Se crea div 
    divCorreo.classList.add("tabla_alumno-correo");     //Se asigna la clase "tabla_alumno-correo" 
    fragmentoAlumno.appendChild(divCorreo)              //Se almacena div creado en el fragmento "fragmentoAlumno"
    divCorreo.textContent = alumnos[i].correo;

    let divMateria = document.createElement("DIV");     //Se crea div 
    divMateria.classList.add("tabla_alumno-materia");   //Se asigna la clase "tabla_alumno-materia" 
    fragmentoAlumno.appendChild(divMateria)             //Se almacena div creado en el fragmento "fragmentoAlumno"
    divMateria.textContent = alumnos[i].materia;

    let divSemana = document.createElement("DIV");      //Se crea div 
    divSemana.classList.add("tabla_alumno-semana");     //Se asigna la clase "tabla_alumno-semana" 
    fragmentoAlumno.appendChild(divSemana)              //Se almacena div creado en el fragmento "fragmentoAlumno"
    let infoSemana = `
    <select class="semana-elegida">
    <option value="Semana 1">Semana 1</option>
    <option value="Semana 2">Semana 2</option>
    </select>`;
    divSemana.innerHTML += infoSemana;                 // += Agrega el contenido html almacenado en inforsemana

 
    divTablaAlumno.appendChild(fragmentoAlumno)         
    /*Se almacena el fragmento que contiene todos los div de (nombre,correo,materia,semana) dentro del contenedor que lleva como nombre la variable divTablaAlumno*/

}

tabla.appendChild(fragmentoTablaAlumno)

boton.addEventListener("click",(e)=>{

    let divSemana = document.querySelectorAll(".tabla_alumno-semana")   //Se captura todos los div de semana
    let semanaElegida = document.querySelectorAll(".semana-elegida")

    for (const i in divSemana) {        //Se recorre todos esos div de semana capturados
        // let semana = divSemana[i];      // se caputra los dvis en la variable semana 
        divSemana[i].innerHTML = semanaElegida[i].value;     // se agrega al html "Hola"
    }
})

/*
    *Recordar que si se captura todos los elementos con el mismo nombre de la clase
    *Se recomienda usar un for con contador para que remplace o agrege informacion a cada uno de esos elementos con la misma clase
*/


/*
<div class="tabla_alumno">
<div class="tabla_alumno-nombre">Jose David Alape Delgado</div>
<div class="tabla_alumno-correo">josedavid112009@gmail.com</div>
<div class="tabla_alumno-materia">Matematicas</div>
<div class="tabla_alumno-semana">
  <select class="semana-elegida">
    <option value="1">Semana 1</option>
    <option value="2">Semana 2</option>
  </select>
</div>
</div> 
*/