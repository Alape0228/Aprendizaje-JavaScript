/*
    cuantas personas cursan el semestre y cuantas no

    * Crear un sistema que le permita obtener esa informacion
    * Mostrarla Ordenadamente en un sitio web
*/

let obtenerInformacion = document.querySelector(".obtener_Informacion");
let contenedor = document.querySelector(".contenedor")

// axios("informacion.txt").then(e => console.log(e))


let obtener = async()=>{
    let peticion = await axios("./Datos/informacion.txt");
    let aprobadosJS = peticion.data.aprobados;
    let reprobadosJS = peticion.data.desaprobados;
    
    // console.log(aprobadosJS);
    let pAprobado = document.createElement("P");
    let pReprobado = document.createElement("P");
    contenedor.appendChild(pAprobado)
    contenedor.appendChild(pReprobado)
    
    pAprobado.textContent = aprobadosJS;
    pReprobado.textContent = reprobadosJS;
}








obtenerInformacion.addEventListener("click",obtener)