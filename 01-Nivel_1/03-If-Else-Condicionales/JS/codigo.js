/*
    If:
        Si la evaluacion es positiva (verdadera) se ejecuta una parte del codigo
    
    If + Else:
        En caso de que no se cumpla la condicion, if permite agregar una condicion else que incluye un bloque de codigo que se ejecute al no cumplirse la primera condicion
*/

 var prueba = true;

if (prueba == false) {
    console.log("El estudiante reprobo la tarea")
 } else {
    console.log("El estudiante aprobo la tarea")
 }

var nombre = "David Alape";

if (nombre == "mafe") {
    document.write("Hola 1");
} 
else if (nombre == "Alape David") {
    document.write("Hola 2");
}
else if (nombre == "David Alape") {
    document.write("Hola 3");
}
else{
    document.write("Si esto se imprime es por que nada de lo anterior era correcto");
}