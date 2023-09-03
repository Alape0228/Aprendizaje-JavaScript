/*
Eventos del Mouse 
    * click         - Ocurre Con un click
    * dbclick       - Ocurre con un doble click
    * mouseover     - Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
    * mouseout      - Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios
    ------ OTROS ------
    * contextmenu   - Ocurre con un click en el boton derecho en un elemento para abrir un menu contextuañ 
    * mouseenter    - Ocurre cuando el puntero se mueve sobre un elemento (solo explorer)
    * mousemove     - Ocurre cuando el puntero se mueve mientras esta sobre un elemento
    * mouseleave    - Ocurre cuando el puntero se mueve fuera de un elemento
    * mousedown     - Ocurre cuando el puntero se mueve mientras esta sobre un elemento
    * mouseup       - Ocurre cuando un usuario suelta un boton del mouse sobre un elemento 
*/
/* //////////////////////////////////// Agregar un evento de escucha //////////////////////////////////// */

let caja01 = document.querySelector(".caja01");
let caja02 = document.querySelector(".caja02")
let caja03 = document.querySelector(".caja03")
let caja04 = document.querySelector(".caja04")
let caja05 = document.querySelector(".caja05")
let caja06 = document.querySelector(".caja06")
let caja07 = document.querySelector(".caja07")
let caja08 = document.querySelector(".caja08")
let caja09 = document.querySelector(".caja09")
let caja10 = document.querySelector(".caja10")


/* //////////////////////////////////// Evento click //////////////////////////////////// 
  * Evento generado por un solo click
*/
caja01.addEventListener("click", (e) => {
  alert("Estoy Dando Click en la caja01")
} )


/* //////////////////////////////////// Evento dblclick //////////////////////////////////// 
  * Evento generado al usar doble click sostenido no lento o separado
*/
caja02.addEventListener("dblclick", (e) => {
  alert("Estoy Dando un doble click sostenido en la caja02")
} )


/* //////////////////////////////////// Evento mouseover //////////////////////////////////// 
  * Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
  * La particularidad es que el evento se aplica a todo el elemento significa
  * que si el puntero del mouse entra a otro div hijo del elemento se aplicara el evento o si entra a algun boton u otro elemento hijo se seguira aplicando el evento repetitivamente hasta que no se salga del contenedor padre como tal que es el que contiene el evento
*/
caja03.addEventListener("mouseover", (e) => {
  alert("El puntero del mouse esta sobre la caja 03")
} )


/* //////////////////////////////////// Evento mouseout //////////////////////////////////// 
  * Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios 
  * Originalmente no se aplica efecto alguno si entra al elemento pero si el mouse pasa por uno de sus elementos hijos o sale del elemento que tiene el evento se generara el efecto
*/
caja04.addEventListener("mouseout", (e) => {
  alert("Estoy Dando Click en la caja04")
} )


/* //////////////////////////////////// Evento contextmenu //////////////////////////////////// 
  *Ocurre con un click en el boton derecho en un elemento para abrir un menu contextual
*/
caja05.addEventListener("contextmenu", (e) => {
  alert("Estoy Dando Click en la caja05")
} )


/* //////////////////////////////////// Evento mouseenter //////////////////////////////////// 
* Ocurre cuando el puntero se mueve sobre un elemento
*/
caja06.addEventListener("mouseenter", (e) => {
  alert("Estoy Dando Click en la caja06")
} )


/* //////////////////////////////////// Evento mousemove //////////////////////////////////// 
  * Ocurre cuando el puntero se mueve mientras esta sobre un elemento
*/
caja07.addEventListener("mousemove", (e) => {
  alert("Estoy Dando Click en la caja07")
} )


/* //////////////////////////////////// Evento mouseleave //////////////////////////////////// 
  * Ocurre cuando el puntero se mueve fuera de un elemento
*/
caja08.addEventListener("mouseleave", (e) => {
  alert("Estoy Dando Click en la caja08")
} )


/* //////////////////////////////////// Evento mousedown //////////////////////////////////// 
  * Ocurre cuando el puntero se mueve mientras esta sobre un elemento
*/
caja09.addEventListener("mousedown", (e) => {
  alert("Estoy Dando Click en la caja09")
} )


/* //////////////////////////////////// Evento mouseup //////////////////////////////////// 
  * Ocurre cuando un usuario suelta un boton del mouse sobre un elemento 
*/
caja10.addEventListener("mouseup", (e) => {
  alert("Estoy Dando Click en la caja10")
} )
