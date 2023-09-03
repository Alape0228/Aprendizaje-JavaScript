/*
    Crear mini-sistema para registrar 
    presentes (p) asistencias (a)
    pasados 30 Dias mostrar la situacion final de todos los alumnos
    maximo 10% de ausencias por semana o delcarar que estas reprobado

*/


let cantidadAlumnos = prompt("Cuantos Alumnos hay en la clase ");

let alumnosClase = [];

for (let i = 0; i < cantidadAlumnos; i++) {
    alumnosClase[i] = [prompt("Digita por favor el nombre de los alumnos"),0]
    //alumnosClase[i] = prompt(["Digita por favor el nombre de los alumnos"][0]);
    //  De esta manera no funcionarria por que dentro de un array, estoy guardando 2 arrays  
}

let asistencia = (nombre,p)=>{
    let presente = prompt(nombre);
    if (presente == "p" || presente == "P") {
        alumnosClase[p][1]++;
        // aqui indicamos alumnosClase[contador][1] para que tengan en cuenta la posicion 1 del array alumnosClase que son las asistencias
    }
}

for (let i = 0; i < 10; i++) {
    for (contador in alumnosClase) {
        asistencia(alumnosClase[contador][0],contador);
        // aqui indicamos alumnosClase[contador][0] que tengan en cuenta la posicion 0 del array alumnosClase que es el nombre
    }
}

for (contador in alumnosClase) {
    resultado = `
    Nombre Del Estudiante _________________________${alumnosClase[contador][0]}<br>
    Asistencias Del Estudiante para este mes ___________${alumnosClase[contador][1]}<br>
    Teniendo en cuenta que el maximo de inasistencias es _3 <br>
    Inasistencias _________________________________${10 - alumnosClase[contador][1]}<br>`;

    if ((10 - alumnosClase[contador][1]) >= 3 ) {
        resultado += `El estudiante Acaba de Reprobar por inasistencias <br><br>`;
    }
    else{
        resultado +=`<br>`
    }
    
    document.write(resultado);

}

