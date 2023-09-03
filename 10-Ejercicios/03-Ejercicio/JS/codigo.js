/*
    Instrucciones:
        * Interfaz para introducir Nota
        * Validar Que no haya errores
        * Promediar Notas con Trabajos
        * Si el promedio es mayor a 7/10 aprobar
        
*/

let formularioNotas = document.querySelector(".formulario-notas") 
let enviarNota = document.querySelector(".enviar-nota") 

enviarNota.addEventListener("click",()=>{
    let notaAlumno = parseInt(document.querySelector(".nota-alumno").value);  
    
    if (notaAlumno >10 || notaAlumno < 0) {
        console.log("Que intentas hacer la nota que registraste no puede ser mayor a 10 o menor a 0")
    } 
    else if (isNaN(notaAlumno)){
        try {
            throw "Esto no es numero se que intentaste hackear el sistema"
        } 
        catch (error) {
            console.log(error)            
        }
    } 
    else {
        let resultado = (notaAlumno + 9 +5);        
        //Esto es para que nos indique la suma total de sus notas
        let promedio = Math.trunc((resultado * 100) / 30);  
        // Esto es para calcular su promedio
        let aprobado = verificarAprobado(promedio)  
        //Esto es para saber si el estudiante paso o no teniendo en cuenta que debe superar el 70%
        let mensajeFinal = verificarMensaje(notaAlumno, resultado, promedio); 
        //es para que imprima el mensaje completo
        modal(aprobado,mensajeFinal);
    }
})

let verificarAprobado = (promedio) => {
    let aprobado;
    if (promedio >= 70) {
        aprobado = "Aprobado"
    } else {
        aprobado = "Reprobado"
    }
    return aprobado
}

/*
    * Funcion cuyo procedimiento solo es para traer el resultado de que si aprobo o no dependiendo del promedio obtenido
*/

let verificarMensaje = (notaAlumno, resultado, promedio)=>{
    let mensaje;
    switch (notaAlumno) {
        case 1:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 2:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 3:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 4:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 5:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 6:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 7:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 8:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 9:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
        case 10:
            mensaje = `la suma de tus notas es ${resultado} y tu promedio quedo en ${promedio}%`;
            break;
    }
return mensaje;
}
/*
    * Para el swicth simplemente creamos distintos casos que se almacenaban en una variable, donde el resultado es independiente de la opcion se el usuario halla elegido
    * este swicth es encerrado en una funcion donde nos retornara el resultado del switch que finalmente sera el mensaje que nos devolvera
*/
let modalContenedor = document.querySelector(".modal-Contenedor")

let modal = (aprobado,mensajeFinal)=>{


    modalContenedor.style.display = "flex";
    modalContenedor.style.animation = "aparecer 1s forwards";

    let htmlModal = `
    <div class="modal">
        <h1 class="modal-titulo">${aprobado}</h1>
        <h4 class="modal-subtitulo">${mensajeFinal}</h4>
    </div>`

    modalContenedor.innerHTML = htmlModal

}

modalContenedor.addEventListener("click",(e)=>{
    modalContenedor.style.display = "none";
})
/*
    En esta funcion se crea el modal, se inserta el html y finalmente se agregan los estilos para que el modal aparezca y tenga la animacion

    finalmente en dicho modal agregamos el contenido requerido
*/


/*
    isNaN(notaAlumno)
        En la linea 18 lo que hace es que valida si es nan o no 
    
    la variable mensaje se inicializo antes del switch

*/