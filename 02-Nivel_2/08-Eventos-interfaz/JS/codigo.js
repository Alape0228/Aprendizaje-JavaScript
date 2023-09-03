/*
Eventos de la intefaz
    * error         - Ocurre cuando sucede un error durante la carga de un archivo multimedia
    * load          - Ocurre cuando un objeto se ha cargado
    * beforeunload  - Ocurre antes de que el documento este a punto de descargarse
    * unload        - Ocurre una ves que se ha descargado una pagina
    * resize        - Ocurre cuando se cambia el tamaño de la vista del documento
    * scroll        - Ocurre cuando se desplaza la barra de desplazamiento de un elemento
    * select        - Ocurre despues de que el usuario selecciona algun texto de <input> o <textarea>
*/

let ejemplo1 = document.querySelector(".ejemplo1");
let caja02 = document.querySelector(".caja02")
let textarea = document.querySelector(".textarea")


/* //////////////////////////////////// Evento error //////////////////////////////////// 
  * Ocurre cuando sucede un error durante la carga de un archivo multimedia
  * Sirve para video o imagenes
*/
ejemplo1.addEventListener("error", (e) => {
  console.log("Ejemplo 1 : Ha sucedio un error")
} )


/* //////////////////////////////////// Evento load //////////////////////////////////// 
  * Ocurre cuando un objeto se ha cargado
  * Se puede acceder al body sin necesidad de agregarle algun tipo de clase solo con (window.addEventListener)
*/
window.addEventListener("load", (e) => {
  console.log("Ejemplo 2 : Se ha cargado completamente el body")
} )


/* //////////////////////////////////// Evento beforeunload //////////////////////////////////// 
  * Ocurre antes de que el documento este a punto de descargarse
  * Genera el evento en el momento en que damos click a un enlace para dirigirnos a otra pagina antes de cargarse o dirigirse a dicha pagina se genera el evento
  *podemos generar el evento en todo el body solo con addEventListener 
*/
addEventListener("beforeunload", (e) => {
  console.log("Ejemplo 3 Funcionando");
} )


/* //////////////////////////////////// Evento unload //////////////////////////////////// 
  * Ocurre una ves que se ha descargado una pagina
  * Cuando te vas del sitio y antes de que te vayas del sitio
*/
addEventListener("unload", (e) => {
  console.log("Ejemplo 4 Funcionando");
} )


/* //////////////////////////////////// Evento resize //////////////////////////////////// 
  *Ocurre cuando se cambia el tamaño de la vista del documento
*/
addEventListener("resize", (e) => {
  console.log("Ejemplo 5 Se esta modificando el tamaño de la ventana");
} )


/* //////////////////////////////////// Evento scroll //////////////////////////////////// 
* Ocurre cuando se desplaza la barra de desplazamiento de un elemento
*/
addEventListener("scroll", (e) => {
  console.log("Ejemplo 6 Se esta utilizando el scroll de la ventana");
} )


/* //////////////////////////////////// Evento select //////////////////////////////////// 
  * Ocurre cuando el puntero se mueve mientras esta sobre un elemento
  * Si algo del texto del inputo o del text area es seleccionado se generara el evento
*/
let prueba = document.querySelector(".prueba")

textarea.addEventListener("select", (e) => {
  console.log("Ejemplo 7 Funciona");
  let start = e.target.selectionStart //Almacenamos el primer caracter seleccionad
  let end = e.target.selectionEnd //Almacenamos el ultimo caracter seleccionado
  let contenido = textarea.value; // Almacenamos el valor que contiene el elemento input
  prueba.textContent = contenido.substring(start,end); // aqui agregamos el contenido a un parrafo
  console.log(contenido.substring(start,end)) // Recoradr que la funcion substring() recorta el string 
} )
