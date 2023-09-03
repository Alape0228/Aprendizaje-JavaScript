/*
Timers (Temporizadores)
  * setTimeout()
    1 Parametro una funcion
    2 Parametro en cuanto tiempo lo queremos ejecutar en milisegundos 2seg (2000)
  
  * clearTimeout()
    Sirve para impedir que se ejecute el temporizador anterior

  * setInterval()
    Ejecuta el temporizador no solo despues de 1 seg si no tambien cada segundo se ejecutara

  * clearInterval()
    Sirve para eliminar el temporizador con intervalos infinitos
*/

let caja01 = document.querySelector(".caja01");
let caja02 = document.querySelector(".caja02")
let caja03 = document.querySelector(".caja03")
let caja04 = document.querySelector(".caja04")


/* //////////////////////////////////// Evento setTimeout() //////////////////////////////////// 
    1 Parametro una funcion
    2 Parametro en cuanto tiempo lo queremos ejecutar en milisegundos 2seg (2000)
*/
setTimeout(()=>{
  caja01.textContent = "Mama me estoy volviendo programador xD";
},2000 )


/* //////////////////////////////////// Evento clearTimeout() //////////////////////////////////// 
  * se almacena en una variable el temporizador
  * Se usa misma variable para detener el temporizador
*/
let temporizador = setTimeout(()=>{
  caja02.textContent = "En esta caja se almacena la variable temporizador";
},1000 )

clearTimeout(temporizador);

/* //////////////////////////////////// Evento setInterval() //////////////////////////////////// 
  Ejecuta el temporizador no solo despues de 1 seg si no tambien cada segundo se ejecutara
*/
setInterval(()=>{
  caja03.innerHTML = "Revisa por consola";
  console.log("soy un temporizador setInterval()")
},1000 )



/* //////////////////////////////////// Evento clearInterval() //////////////////////////////////// 
    Sirve para eliminar el temporizador con intervalos infinitos
*/
let temporizador2 = setInterval(()=>{
  caja04.innerHTML = "Revisa por consola";
  console.log("Hola me ejecutare 5 veces")
},1000 )

setTimeout(()=>{
  clearInterval(temporizador2);
},5000 )



