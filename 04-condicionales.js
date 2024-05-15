let leche = true
let manzanas = true


// true -> verdadero
// false -> falso

//condicionales comunes y corrientes
if(leche){
    console.log("traer 20 huevos");
}

//condicionales anidados
if(leche){
    console.log("traer 10 bolsas");
} else if(manzanas){
    console.log("traer 5 unidades");
} else if(manzanas){
    console.log("traer 5 unidades");
} else if(manzanas){
    console.log("traer 5 unidades");
} else if(manzanas){
    console.log("traer 5 unidades");
} else if(manzanas){
    console.log("traer 5 unidades");
} 
else {
    console.log("no traiga nada");
}


let edadRequerida = "18";
let edad = "18";

if(parseInt(edad) > parseInt(edadRequerida)){
    console.log("Puede entrar a la discoteca");
}else{
    console.log("NO entrar a la discoteca");
}

let numero1 = "20";
let numero2 = 20;

if(numero1 == numero2){
    console.log("es igual")//codigo propenso a fallos.
}

if(parseInt(numero1) === parseInt(numero2)){
    console.log("es igual") // codigo seguro. 
}

if(numero1 === numero2){
    console.log("es igual")
}else{
    console.log("NO es igual")
}

let nombre1 ="daniel";
let nombre2 ="Daniel";

if(nombre1 == nombre2){
    console.log("es igual")
}else{
    console.log("NO es igual")
}

if(nombre1.toLowerCase() == nombre2.toLowerCase()){
    console.log("es igual")
}

if(nombre1 === nombre2){
    console.log("es igual")
}else{
    console.log("NO es igual")
}

let flotante1 = "2.99"
let flotante2 = 2.99

if(flotante1 == flotante2){
    console.log("es igual")
}else{
    console.log("NO es igual")
}

if(parseFloat(flotante1) === parseFloat(flotante2)){
    console.log("es igual")
}else{
    console.log("NO es igual")
}

//switch case
let x = 11;
let y = 9;
let resultado = x+y;

switch(resultado){

    case 10:
        console.log("Es manzana")
        break;

    case 20:
        console.log("Es pera")
        break;

    case 30:
    console.log("Es aguacate")
    break;

    default : console.log('No hay ningún resultado')
}

//Condicionales ternarios
// variable a evaluar ? valor verdadero : valor falso
let nombre = "Daniel";
nombre = 'Felipe' ? console.log('es correcto') : console.log('es incorrecto')
//if(nombre == 'felipe') 
