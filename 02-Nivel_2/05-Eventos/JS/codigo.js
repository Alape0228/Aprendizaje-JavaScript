/*
EVENTOS
    * Definicion de eventos o "Event Handlers" (manejador de eventos)
    * Escucha de eventos o "Event Handlers"
    * El objeto Event
    * Flujo de Eventos o "event flow"
    * Event Bubbling vs Event Capturing
    * eventstopPropagation()
    
Eventos del Mouse 
    * click         - Ocurre Con un click
    * dbclick       - Ocurre con un doble click
    * mouseover     - Ocurre cuando el puntero se mueve sobre un elemento o sobre uno de sus hijos
    * mouseout      - Ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios
    ------ OTROS ------
    * contextmenu   - Ocurre con un click en el boton derecho en un elemento para abrir un menu contextuañ 
    * mouseenter    - Ocurre cuando el puntero se mueve sobre un elemento
    * mouseleave    - Ocurre cuando el puntero se mueve fuera de un elemento
    * mouseup       - Ocurre cuando un usuario suelta un boton del mouse sobre un elemento 
    * mousemove     - Ocurre cuando el puntero se mueve mientras esta sobre un elemento
    
Eventos del teclado 
    * Keypress      - Ocurre cuando una tecla se presiona
    * keydown       - Ocurre cuando una tecla se deja de presionar
    * onkeyup       - Ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
    
Eventos de la intefaz
    * error         - Ocurre cuando sucede un error durante la carga de un archivo multimedia
    * load          - Ocurre cuando un objeto se ha cargado
    * beforeunload  - Ocurre antes de que el documento este a punto de descargarse
    * unload        - Ocurre una ves que se ha descargado una pagina
    * resize        - Ocurre cuando se cambia el tamaño de la vista del documento
    * scroll        - Ocurre cuando se desplaza la barra de desplazamiento de un elemento
    * select        - Ocurre despues de que el usuario selecciona algun texto de <input> o <textarea>
    
Timers (Temporizadores)
    * setTimeout()
    * setInterval()
    * clearTimeout()
    * clearInterval()
*/
/* //////////////////////////////////// Agregar un evento de escucha //////////////////////////////////// */

// addEventListener Es una escucha de evento
// lo que realiza es (add) añadir un evento de escucha
let boton1 = document.querySelector(".boton1");

boton1.addEventListener("click", () => {
  alert("esto esta funcionando");
});
// Para esta ocacion se decide usar la funcion flecha dentro del parametro y asi poder ejecutarse

/* //////////////////////////////////// Remover un evento de escucha //////////////////////////////////// */
let boton2 = document.querySelector(".boton2");

boton2.addEventListener("click", saludar);

function saludar() {
  alert("nose que escribir aca");
  boton2.removeEventListener("click", saludar);
}
/*
 * click es el evento
 * saludar como segundo parametro es el nombre de la funcion
 * Luego a la funcion se le da la orden de que es lo que debe realizar
 * El codigo se ejecutara una sola ves en el boton y luego se elminara el evento
 */

/* //////////////////////////////////// parametro evento y sus propiedades //////////////////////////////////// */
let boton3 = document.querySelector(".boton3");
boton3.addEventListener("click", (evento) => {
  console.log(evento);
  console.log(evento.target);
});

/*
 * El evento que se ejecuta y todas sus propiedades
 * Si se busca solo por cosola y solo con evento, mostrara absolutamente todas las propiedades con las que cuenta el evento
 * Si se usa . y luego el nombre de la propedad se podra acceder a la propiedad en especifico
 * target es para saber el elemento que ocaciona el evento suceda
 */
//

/* //////////////////////////////////// Flujo de eventos //////////////////////////////////// */
let contenedor1 = document.querySelector(".contenedor1");
let boton4 = document.querySelector(".boton4");

contenedor1.addEventListener("click", (e) => {
  alert("Estoy Dando Click en el contenedor");
});
boton4.addEventListener("click", (e) => {
  alert("Estoy Dando Click en el boton");
});

// sE EJECUTA PRIMERO LOS HIJOS Y LUEGO LOS ELEMENTOS PADREES
// Apesar de que se escribe primero el codigo del contenedor se ejecuta primero los eventos de los elementos hijos

/* //////////////////////////////////// Flujo de eventos Con true //////////////////////////////////// */
let contenedor2 = document.querySelector(".contenedor2");
let boton5 = document.querySelector(".boton5");

contenedor2.addEventListener(
  "click",
  (e) => {
    alert("Estoy Dando Click en el contenedor");
  },
  true
);
boton5.addEventListener("click", (e) => {
  alert("Estoy Dando Click en el boton");
});

// A pesar de que se ejecute primero los elementos hijos si aplicamos como ultimo parametro a addEventListener el valor true podemos hacer que se ejecute primero

/* //////////////////////////////////// eventstopPropagation() //////////////////////////////////// */
let contenedorAmarillo = document.querySelector(".contenedorAmarillo");
let contenedorAzul = document.querySelector(".contenedorAzul");
let contenedorRojo = document.querySelector(".contenedorRojo");

contenedorAmarillo.addEventListener("click",(e)=>{
    alert("Estoy Dando Click En el color Amarillo")
})
contenedorAzul.addEventListener("click",(e)=>{
    alert("Estoy Dando Click En el color Azul")
})
contenedorRojo.addEventListener("click",(e)=>{
    alert("Estoy Dando Click En el color Rojo")
    e.stopPropagation()
})


// El eventstopPropagation() se usa en el evento donde queremos que la propagacion o los eventos finalicen o acaben
// En este caso la propagacion se pausa o se para al momento de llegar al rojo 



