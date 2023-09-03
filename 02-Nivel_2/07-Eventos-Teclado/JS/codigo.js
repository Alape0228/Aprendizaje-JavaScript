/*
Eventos del teclado 
    * keydown       - Ocurre cuando una tecla se presiona
    * Keypress      - Ocurre cuando una tecla se deja de presionar
    * onkeyup       - Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
*/

let input01 = document.querySelector(".input01");
let input02 = document.querySelector(".input02")
let input03 = document.querySelector(".input03")


/* //////////////////////////////////// Evento keydown //////////////////////////////////// 
  * Ocurre cuando una tecla se presiona
*/
input01 .addEventListener("keydown", (e) => {
  console.log("una tecla fue presionada")
} )


/* //////////////////////////////////// Evento keypress //////////////////////////////////// 
  * Ocurre cuando una tecla se deja de presionar
*/
input02.addEventListener("keypress", (e) => {
  console.log("una tecla dejo de ser presionada")
} )


/* //////////////////////////////////// Evento onkeyup //////////////////////////////////// 
  * Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
*/
input03.addEventListener("keyup", (e) => {
  console.log("una tecla dejo de ser presionada")
} )

