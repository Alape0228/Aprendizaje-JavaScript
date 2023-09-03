/*
    PETICIONES HTTP
        * Definicion
        * Cliente & Servidor
        * No guardan informacion
    
    DATOS ESTRUCTURADOS (JSON)
        * Definicion, usos y sintaxis
        * Serializacion y Deserializacion
        * Metodo parse()        - convierte un string con estructura JSON a formato JSON (deserializar)
        * Metodo stringify()    - Convierte un dato de JavaScript en una cadena de texto JSON (serializar)
            Se usa para convertir a string y enviar datos
        * JSON Polyfill         - https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
        
        * Las propiedades las define en comillas
*/
console.groupCollapsed("Objeto Normal, Objeto JSON")
let objeto1 = {
    variable1 : "Jose",
    variable2 : "David"
}
//Objeto Comun y corriente
let objeto2 = {
    "variable1" : "Rosa",
    "variable2" : "Emilia"
}
//Objeto Json las variables van en comillas
console.log(objeto1);
console.log(objeto2);
console.groupEnd("Objeto Normal, Objeto JSON")


//////////////////////////////////////// Serilizar stringify() ////////////////////////////////////////
console.groupCollapsed("Ejemplo Serializar")
let ejemplo1 = {
    "variable1" : "Papito",
    "variable2" : "hermoso"
}
let ejemplo1serializado = JSON.stringify(ejemplo1);
console.log(typeof ejemplo1);               // Tipo de JSON antes de serializar
console.log(typeof ejemplo1serializado);    // Tipo de JSON despues de serializar
// Convertir un JSON a serializado eso quiere decir a String
// para enviar al servidor
console.groupEnd("Ejemplo Serializar")


//////////////////////////////////////// Deserilizar parse() ////////////////////////////////////////
console.groupCollapsed("Ejemplo Deserializar")
let ejemplo2 = `{
    "variable1" : "Papito",
    "variable2" : "hermoso"
}`;
let ejemplo2parse = JSON.parse(ejemplo2);
console.log(typeof ejemplo2);
console.log(typeof ejemplo2parse);
// Convertir un JSON a deserializado a tipo objeto json
// para recibir del servidor
console.groupEnd("Ejemplo Deserializar")
