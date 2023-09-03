/*
Introduccion a window
    Es el objeto mas grande, todos los elementos dependen de el, hace referencia a la ventana  

    * Hereda las propiedades de EventTarget
    * open()    -   carga un recurso en el contexto de un nuevo navegador o uno que ya existe
    * close()   -   cierra la ventana actual, o la ventana en la que se llamo.
    * closed()  -   indica si la ventana referenciada esta cerrada o no.
    * stop()    -   detiene la carga de recursos en el contexto de navegacion actual
    * alert()   -   muestra un cuadro de alerta con el contenido especificado y un boton aceptar
    * print()   -   abre el cuadro de dialogo imprimir para imprimir el documento actual
    * prompt()  -   abre un cuadro de dialogo con un mensaje que solicita al usuario un dato (string)
    * confirm() -   Abre un cuadro de dialogo con un mensaje y dos botones: Aceptar y Cancelar
 
    
    * scrollX   -   Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente
    * scrollY   -   Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente
    * scroll()  -   desplaza la ventana a un lugar particular en el documento. (con options y con posiciones)
    * screen    -   Devuelve una referencia al objeto de pantalla asociada con la ventana 
    * screenLeft-   Devuelve la distancia horizontal entre el borde izquierdo del navegador y el borde izquierdo de 
                    la pantalla
    * screenTop -   Devuelve la distancia vertical entre el borde superior del navegador y el borde superior de la 
                    pantalla


    * minimize()-   Minimiza la ventana
    * resizeBy()-   Cambia el tamaño de la ventana actual en una cantidad especifica
    * resizeTo()-   redimensiona dinamicamente la ventana
    * moveBy()  -   Mueve la ventana en una ubicacion relativa
    * moveTo()  -   Mueve la ventana en una ubicacion absoluta
 
    
    * objetos barprop
        - locationbar
        - menubar
        - personalbar
        - scrollbars
        - statusbar
        - toolbar
*/

/*
////////////////////////////////////////////// window.open() //////////////////////////////////////////////
    Se abre una ventana nueva para este ejemplo youtube
*/
let ejemplo1 = "https://www.youtube.com/";
window.open(ejemplo1);

/*
////////////////////////////////////////////// window.close() //////////////////////////////////////////////
    En este ejemplo cerramos la ventana que ya fue abierta facebook no se visualiza por que a lo que se abre se cierra automaticamente
*/
let ejemplo2 = window.open("https://www.facebook.com/");
ejemplo2.close();

/*
////////////////////////////////////////////// window.closed //////////////////////////////////////////////
    Este metodo se usa con el fin de verificar si la ventana se encuentra actualmente cerrada devolvera true o false
*/
let ejemplo3 = ejemplo2.closed;
document.write("La ventana #2 Facebook fue cerrada ? " + ejemplo3 + "<br>");

/*
////////////////////////////////////////////// window.alert() //////////////////////////////////////////////
    muestra un cuadro de alerta con el contenido especificado y un boton aceptar
*/
let ejemplo4 = window.alert("Hola Esto es el Ejemplo1");

/*
////////////////////////////////////////////// window.print() //////////////////////////////////////////////
    abre el cuadro de dialogo imprimir para imprimir el documento actual
*/
let ejemplo5 = window.print("Hola Esto es el Ejemplo2");
document.write("Recordar que para imprimir se usa window.print");

/*
////////////////////////////////////////////// window.prompt() //////////////////////////////////////////////
    abre un cuadro de dialogo con un mensaje que solicita al usuario un dato (string)
*/
let ejemplo6 = window.prompt("solicita datos y los captura como string");

/*
////////////////////////////////////////////// window.confirm() //////////////////////////////////////////////
    Abre un cuadro de dialogo con un mensaje y dos botones: Aceptar y Cancelar
*/
let ejemplo7 = window.confirm("Esto es un ejemplo numero 7");
