/*
    Fecth y Axios con Await y Async

        Implementacion
        Importancia el Try y Catch
*/

// let obtenerNombre = ()=>{
//     fetch("informracion.txt")
//         .then((res)=>{
//             if (res.ok) {
//                 Promise.resolve(console.log(res))
//             } else {
//                 Promise.resolve(console.log(res))
//             }
//         }).catch((error)=>{
//             console.log(error);
//         })
// }
// obtenerNombre()
/*
    * Una de las propiedades que devuelve un fecth fetch("informacion.txt").then(e=>console.log(e))
    * Es ok: que viene como valor true o false lo que nos indica que encontramos respuesta del servidor por la url o el archivo que buscamos
    * Se puede usar en if o else
*/

let divResultado = document.querySelector(".div_Resultado")

let obtenerNombre = async()=>{
    let peticion = await fetch("informacion.txt")   //En este momento peticion es una promesa encapsulada
    let resultado = await peticion.json()           //Resultado ahora es la promesa en type Json para poder trabajar
    // console.log(resultado);
    let conHtml = `
        Nombre : ${resultado.Nombre}<br> 
        Edad : ${resultado.Edad}` 

    divResultado.innerHTML = conHtml;

}
// obtenerNombre()
/*
    *   La siguiente linea de codigo es para almacenar en una variable la promesa encapsulada tipo Json
    *   let peticion = fetch("informaxion.txt").then(res=>res.json())
    *   Pero con await se puede hacer de una mejor manera
*/

let nombre = document.querySelector(".nombre").addEventListener("click",obtenerNombre)
/*
    *   En la linea de codigo anterior observamos 
    *   que se ejecuta la funcion sin necesidad de () al final del nombre de la funcion
    *   y la pasamos como segundo parametro para que se ejecute al dar click en el boton
    *   de manera simplificada sin usar nombre.addEventListener("click",obtenerNombre)
*/