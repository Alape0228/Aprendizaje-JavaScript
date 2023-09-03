

class animal {
    constructor(especie,edad,color){
        this.caracteristica = especie;
        this.propiedad = edad;
        this.atributo = color;
        this.informacion = `
            Soy un ${this.caracteristica}, tengo ${this.propiedad} años y soy de color ${this.atributo}`;
    }
    verInformacion(){
        document.write(this.informacion + "<br>");
    }
    ladrar(){
        if (this.caracteristica == "perro") {
            document.write("Soy un perro y puedo ladrar waw waw waw <br>");
        }
        else {
            document.write("no puedo ladrar ya que soy un : " + this.caracteristica + "<br>");
        }
    }
}
/*
    Heredar
    1- No es necesario el this. ya que se esta heredando
    2- la clase perro esta herendando las propiedades que se especifiquen y metodos que contenga la clase padre
    3- lo bueno es que adiciona propiedades en este caso "raza"
    4- con super indicamos las propiedades que se heredaran
    5- si se usa this en raza debido a que esa propiedad si no se esta heredando y debemos declararla
    6- esta ves creamos la varibale y en ves de llamar o asignarle la clase animal le asignamos la clase perro que es la sub clase el hijo, de esta manera sera mas especifico y el hijo contendra datos del padre
    7- que el nombre de las clases no tengan el mismo nombre de las variables u objetos
*/


class perro extends animal{
    constructor(especie,edad,color,raza,nombre1,tamaño1){
        super(especie,edad,color);
        this.raza = raza;
        this.nombre = null;
        this.tamaño = null;
    }
    static orinar(){
        document.write("estoy alzando la patita para orinar <br>");
    }
    modificarNombre1(){
        this.nombre1 = "pedro";
        // una manera para modificar valores
    }
    set settamaño1(nuevotamaño){
        this.tamaño = nuevotamaño;
    }

    get gettamaño1(){
        return this.tamaño;
    }
}

// mas que creacion de una variable es creacion de un objeto
// el rafael no funciona ya que a la propiedad nombre no se le definio el parametro que se esta enviado entonces se pierde
let animalPerro = new perro("perro",5,"rojo","doberman","rafael");
let animalGato = new animal("gato",10,"amarillo");
let animalLoro = new animal("loro",15,"verde");


animalPerro.verInformacion()
animalGato.verInformacion()
animalLoro.verInformacion()
console.log(animalPerro);

document.write("<br><br>");
animalPerro.ladrar()
// animalPerro.orinar()
// ya no puedo llamar el metodo de esta manera siendo static "animalPerro.orinar()", de esa manera solo serviria en caso contrario
perro.orinar()
// si va llamar el metodo siendo static se debe llamar directamente el objeto con el metodo
animalGato.ladrar()
animalLoro.ladrar()

document.write("<br><br>");

/* 
    Metodo Estatico:
        es un metodo que no necesita que la clase se defina para poder ser creado 
        no es necesario crear el objeto para que el motodo funcione ya que no usa propiedades del objeto que lleva el constructor


*/

animalPerro.modificarNombre1()
document.write(animalPerro.nombre1);

// se inicia se llama o se usa el metodo o funcion modificarNombre1() con el fin de que el nombre "undefined o null" cuente con el valor "pedro como lo dice la funcion"


/*
    Metodo Getter:
    Sirven para obtener un valor

    Metodo Setter:
        Sirven para modificarlo o definirlo
*/

animalPerro.settamaño1 = "183 Cms";
// en esta linea de codigo le estamos pasando los valores que queremos que cambien

document.write(animalPerro.gettamaño1);
// aqui estamos llamando lo que retorna el metodo "gettamaño1"  