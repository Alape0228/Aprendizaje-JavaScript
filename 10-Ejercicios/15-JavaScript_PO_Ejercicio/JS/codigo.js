/*
    Cofla desea comprar celulares
    desea comprar 3 modelos especificamente
    los vendedores no saben que recomendar
    antes de comprarlo quiere ver las cualidades y comportamientos de cada uno

    1- Mostrar las particularidades de los 3 celulares
    2- Cada uno debe tener color, peso resolucion de pantalla, camara y memoria ram
    3- deben poder prender, reiniciar tomar fotos y grabar
*/  

/*
    Cofla no esta satisfecho con lo mostrado anteriormente y va a celulares de alta gama
    y ahi encontrara los celulares mas caros de la tienda y ve dos celulares de alta gama que le parecieron fabulosos que hacian lo mismo que los celulares anteriores y podrian hacer cosas mejores pueden grabar en camara super lenta, tienen reconocimiento facial y una camara extra
*/

class celulares{
    constructor(color,peso, resPantalla,camara,memoria){
        this.gnrlcolor = color;
        this.gnrlpeso = peso;
        this.gnrlresPantalla = resPantalla;
        this.gnrlcamara = camara;
        this.gnrlmemoria = memoria;
        this.gnrlEcendido = false;
        this.info = `
        Celular de baja gama : <br>
        Color : ${color} <br>
        Peso : ${peso} <br>
        Resolucion de Pantalla : ${resPantalla} <br>
        Camara : ${camara} <br>
        memoria : ${memoria} <br>`;
    }
    encender(){
        if (this.gnrlEcendido == false) {
            alert("Celular Ecendido");
            this.gnrlEcendido = true;
            // Esto ultimo es importante para declarar a la variable ya apagada que se encienda y se mantenga asi
        }
        else{
            alert("El celular se encuentra apagado");
            this.gnrlEcendido == false;
        }
    }
    reiniciar(){
        if (this.gnrlEcendido == true) {
            alert("Reiniciando celular");
            this.gnrlEcendido == true;
        }
        else{
            alert("El celular Esta apagado avispado primero enciendalo antes de reiniciarlo");
            this.gnrlEcendido == false;
        }
    }
    tomarFotos(){
            alert("Foto Tomada");
    }
    grabar(){
        alert("Grabando");
}

}

let celbajagama1 = new celulares("rojo","10Kg","720px - 1280px","1 foco","50gb");
let celbajagama2 = new celulares("amarillo","12Kg","750px - 1300px","1 foco","70gb");
let celbajagama3 = new celulares("azul","14Kg","760px - 1320px","1 foco","90gb");


document.write(celbajagama1.info + "<br>");
document.write(celbajagama2.info + "<br>");
document.write(celbajagama3.info + "<br>");

document.write("<br>");

// let confirmEncendido = prompt(`Desea encender el celular para probarlo`);
// if (confirmEncendido == "si" || confirmEncendido == "Si" || confirmEncendido == "SI") {
//     celbajagama1.encender()
// }

// let confirmReinicio = prompt(`Desea reiniciar el celular para probarlo`);
// if (confirmReinicio == "si" || confirmReinicio == "Si" || confirmReinicio == "SI") {
//     celbajagama1.reiniciar()
// }

// let confirmFotos = prompt(`Desea Fotos en el celular para probarlo`);
// if (confirmFotos == "si" || confirmFotos == "Si" || confirmFotos == "SI") {
//     celbajagama1.tomarFotos()
// }

// let confirmGrabar = prompt(`Desea Grabar con el celular para probarlo`);
// if (confirmGrabar == "si" || confirmGrabar == "Si" || confirmGrabar == "SI") {
//     celbajagama1.grabar()
// }




class altaGama extends celulares {
    constructor(color,peso, resPantalla,memoria,camara,reconFacial,grabar){
        super(color,peso, resPantalla,memoria)
        this.gaCamara = camara;
        this.gaReconFacial = reconFacial;
        this.gaGrabar = grabar;
        this.gaColor = color;
        this.gaPeso = peso;
        this.gaResPantalla = resPantalla;
        this.gaMemoria = memoria;
    }
    mostrar(){
        document.write(`
        Celular de Alta Gama : <br>
        Color : ${this.gaColor} <br>
        Peso : ${this.gaPeso} <br>
        Resolucion de Pantalla : ${this.gaResPantalla} <br>
        Camara : ${this.gaCamara} <br>
        memoria : ${this.gaMemoria} <br>
        Tiene Reconocimiento Facial : ${this.gaReconFacial} <br>
        Puede grabar en camara lenta : ${this.gaGrabar} <br><br>`);
    }
}


let celAltaGama1 = new altaGama("Negro","20Kg","800px - 1600px","100gb","3 focos","Si","Si");
let celAltaGama2 = new altaGama("Plateado","30Kg","850px - 1650px","150gb","3 focos","Si","Si");

celAltaGama1.mostrar();
celAltaGama2.mostrar();
