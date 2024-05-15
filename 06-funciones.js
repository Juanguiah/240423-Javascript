//Funciones declarativas
function saludar(nombres, apellidos, edad){
    console.log(`Hola ${nombres} ${apellidos}, su edad es ${edad}`);
}
saludar("Jose Daniel", "Garces")

let persona = {
    nombre: "Daniel",
    apellido: "Garces",
    edad: 50,
    casado: false,
    hijos: false,
    altura: '200cm',
    peso: '100kg'
}

function saludar2(obj){
    const {nombre: nombres, apellido: apellidos, edad} = obj;
    console.log(`Hola ${nombres} ${apellidos}, su edad es ${edad}`);
}
saludar2(persona)

//Funciones anónimas
let saluda = function(){

}

//Funciones de flecha -> op1
const saludar = () => {} // no retorna nada.
//Funciones de flecha -> op2
const saluda2 = () => () //return algo

const multiplicar = (a,b) => {
    if(a/2){
        return a*b
    }
};
let resultado = multiplicar(5,2)
console.log("mostrando resultado", resultado)

const multiplicar2 = (a,b) => (a*b);
let resultado2 = multiplicar2(2,2)
console.log("mostrando resultado", resultado2)


let indice = 56;

function calcularArea(){
    let indice = 20;
    console.log(indice)
    indice = 200
    console.log(indice)
}

function calcularRecta(){
    let indice = 30;
    console.log(indice)
}

calcularArea()
calcularRecta()
console.log(indice)