/*
    Cofla esta en el ultimo año y necesita recuperar todas sus notas para saber si paso el ultimo semestre
    de ser asi estaria  un solo pasao para llegar a ser ingeniero
    pero el problema es que todas esas notas estan almacendas en otro servidor

    Instrucciones
    Crear un sistema que almacene toda la informacion de las materias y las muestre de forma ordenada
*/

let contenedor = document.querySelector(".contenedor")

let datos = [
    {
        nombre:"Fisica 4",
        nota: "Nota 7"},
    {
        nombre:"Calculo 3",
        nota: "Nota 7"},
    {
        nombre:"Bases de Datos 3",
        nota: "Nota 7"},
    {
        nombre:"Matematicas discretas 2",
        nota: "Nota 7"},
    {
        nombre:"Programacion 4",
        nota: "Nota 7"}
]

let obtenerMateria = (id)=>{
    return new Promise((resolve, reject) => {
        if (datos[id] == undefined) {
            reject("No se Encontro la materia indicada por el ID")
        } else {
            setTimeout(() => {
                resolve(datos[id])
            }, Math.random()*1400);
        }
    })
}

obtenerMateria(1).then((res)=>{
    console.log(res);
}).catch((error)=>{
    console.log(error)
})

let materiaAsincrona = async()=>{
    // await obtenerMateria()
    for (let i = 0; i < datos.length; i++) {
        await obtenerMateria(i).then((res)=>{
            // console.log(res);
            let html = `
            <div class="materia">
                <h3 class="materia_nombre">${res.nombre}</h3>
                <div class="materia_nota">${res.nota}</div>
            </div>`;
            contenedor.innerHTML += html;
        }).catch((error)=>{
            console.log(error)
        })
    }
}

materiaAsincrona();



// for (let i = 0; i < datos.length; i++) {
//     await obtenerMateria(i).then((res)=>{
//         // console.log(res);
//         let html = `
//         <div class="materia">
//             <h3 class="materia_nombre">${res.nombre}</h3>
//             <div class="materia_nota">${res.nota}</div>
//         </div>`;
//         contenedor.innerHTML += html;
//     }).catch((error)=>{
//         console.log(error)
//     })
// }

    

