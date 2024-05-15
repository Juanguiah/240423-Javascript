//Son estructuras de control, para repetir un bloque de código varias veces hasta que se cumpla una condición.

let personas = [
    {
        nombre: "Daniel",
        apellido: "Garces"
    },
    {
        nombre: "Pedro",
        apellido: "Garces"
    },{
        nombre: "Antonio",
        apellido: "Garces"
    }
]

//for
for(let i = 0; i < personas.length; i++){
    console.log(`Nombres: ${personas[i].nombre} Apellidos : ${personas[i].apellido}`)
}

for(let i = 0; i < 10; i++){
    console.log(i)
}

//while
let i = 0;
while(i < 10){
    console.log(i)
    i++;
}

//do while
let i2 = 0;
do {
    console.log(i2);
    i2++;
} while (i2 < 10)

// for in...
let equipos = {nombre: 'Nacional', clasificacion: 'b', dt: 'chepito'};

for(let key in equipos){
    console.log(`${key}: ${equipos[key]}`)
}

let arr = "Daniel"
for(let value of arr){
    console.log(`${value}`)
}

//Ejercicio de palindromos

const isPalindromo = (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida
}

const palindromos = ["ana", "eve", "bob", "radar", 'anina', "daniel"]
for(let value of palindromos){
    if(isPalindromo(value)){
        console.log(`El nombre ${value} es un palindromo`)
    }else{
        console.log(`El nombre ${value} NO es un palindromo`)
    }    
}