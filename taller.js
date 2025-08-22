//Tipos de variables//
var nombre = "Alejandro";
nombre = "Alex";
console.log(nombre);
const nombre1 = "Amanda";
//nombre1 = "Alicia";//
console.log(nombre1);
//La variable es const por lo tanto no se pueden reasignar su valor o contenido// 
if(false){
    let edad = 19;
    console.log(edad);
}
//console.log(edad);//
// da error de "edad is not defined" devido a que las variables let no tiene caracter global, solo se encuentra definida en el if//
//Tipos de datos//
const string = "String";
const number = 20;
const boolean = true;
const nulo = null;
const indefinido = 
console.log(typeof (string),string);
console.log(typeof (number),number);
console.log(typeof (boolean),boolean);
console.log(typeof (nulo),nulo);
console.log(typeof (indefinido),indefinido);
let persona ={
    nombre : "Alejandro",
    edad : 19,
    hobbies : ["gimansio","Dibujar","Videojuegos"]
};
console.log(typeof(persona),persona);
console.log(typeof(persona.hobbies), persona.hobbies);
//Conversion de datos//
const numero1 = 10;
const numero2 = "5";
console.log(typeof(numero1 + numero2), numero1+numero2);
//se vuelve un String en donde los numeros se junta que dan 105//
console.log(typeof(numero1 * numero2), numero1*numero2);
//se vuelve un numero en donde se multiplica y da 50//
const numero3 = 25;
const numero4 = "100";
const vacio = "";
const hola = "hola";
console.log(String(numero3));
console.log(Number(numero4));
console.log(Boolean(vacio));
console.log(Boolean(hola));
//Operadores, Condicionales, Ciclos y Excepciones//
console.log(10 === "10");
//False: el "===" es para comparar contenido y tipo de datos//
console.log(10 == "10");
//true: El "==" es para comparar el contenido//
for (let i = 1; i <= 5; i++){
    console.log(i);
}
let par = 21;
if(par % 2 == 0 ){
    console.log(par + " es un numero par");
}else{
    console.log(par + " es un numero impar");
}

try{
    throw new Error("esto es un error")
    
}catch(error){
    console.log("Hubo un pequeño error");
}
//Funciones y Arrow Functions//
function multiplicar(num1,num2){
    return num1 * num2;

}
let resulta = multiplicar(100,100);
console.log("El resultado es " +resulta);

const multi = (nume1,nume2) => nume1*nume2;
console.log(multi(50,2));

const saludar = () => "¡Hola a todos!";
console.log(saludar());

//Scope y Contextos//
const globo = "esta es una variable global";
function llamado(){
    const local = "esta es una variable local";
}
console.log(globo);
//console.log(local);//
//la variable golbal si es detectada, mientras que la local la muestra como indefinida//

const coche = {
  marca: "Toyota",
  mostrarMarca: function() {
    return "La marca del coche es: " + this.marca;
  }
};
console.log(coche.mostrarMarca()); 
//this.marca llama la propiedad de marca del objeto coche//

//Arrays//
const frutas =["Manzana","Banana"];
console.log(frutas);
frutas.push("Naranja");
console.log(frutas);
frutas.pop();
console.log(frutas);

const numeros = [1,2,3];
console.log(numeros);
const mul = numeros.map(num => num * 2);
console.log(mul);
const mayores = numeros.filter(num => num > 1);
console.log(mayores);

frutas.forEach(fruta => {
    console.log(fruta);
});
const encontrar = frutas.find(fruta => fruta == "Banana");
console.log(encontrar);
const index = frutas.findIndex(fruta => fruta == "Manzana");
console.log(index);

//Objetos y Clases//
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Este animal se llama ${this.nombre}`;
  }
}
const miAnimal = new Animal("samoriel");
console.log(miAnimal.saludar()); 

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); 
    this.raza = raza; 
  }
  saludar() {
    return `Este es mi dulce y hermoso perro, se llama ${this.nombre} y es de raza ${this.raza}`;
  }
}
const miPerro = new Perro("Samoriel", "Labrador");
console.log(miPerro.saludar());






