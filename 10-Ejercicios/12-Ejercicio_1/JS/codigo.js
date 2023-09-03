/*
    un joven gana el primer premio de la loteria
    cofla fue quien le dio el boleto ganador
    el ganador decidio hacer una fiesta para celebrar
    compro maquina que solo deja pasar los mayores de edad
    El primero que entre despues de las 2 am no paga


    Crear mini-sistema para registrar 
    presentes (p) asistencias (a)
    pasados 30 Dias mostrar la situacion final de todos los alumnos
    maximo 10% de ausencias por semana o delcarar que estas reprobado

*/

function nombreVisitante(){
    let nombre = prompt("Por favor confirmame quien eres:");
    return nombre;
}
function edadVisitante(){
    let edad = prompt("Por favor confirmame tu edad:");
    return edad;
}
function horaVisitante(){
    let hora = prompt("Digita Por favor la hora en que llegaste a la fiesta:");
    return hora;
}
// let nombre = nombreVisitante();
// let edad = edadVisitante();
// let hora = horaVisitante();
// Recordar que no solo se almacena la funcion en la variable si no tambien llama a la funcion

// document.write(nombre);
// document.write(edad);
// document.write(hora);

let usuario = prompt("Deseas empezar a registrar los invitados");

    while (usuario == "si") {
        let nombre = nombreVisitante();
        let edad = edadVisitante();
            if (edad <= 17) {
                alert("lo siento solo pueden ingresar los mayores de edad");
                forRancio;
            } else {
            }
        let hora = horaVisitante();
            if (hora >= 2 && hora < 7 ) {
                alert("Puedes pasar y su entrada es completamente gratis")
            } else {
                alert("Puedes pasar Pero debes pagar la entrada")
            }
        let continuar = prompt("Desea continuar registrando usuarios ?");
        if (continuar == "no") {
            break
        }
        else{
            continue
        }
    }


