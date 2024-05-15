//Sintaxis de una promesa:
let MiPrimerPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promesa resuelta")
    },5000)
    
});

//como usar una promesa:
MiPrimerPromesa
.then(response => console.log(response))
.catch(error => console.log(error))

//Hagamos una tipo REST para esta URL: https://rickandmortyapi.com/api/character:
const axios =require(`axios`);
const GetCharacters = ()=>{
    axios.get(`https://rickandmortyapi.com/api/character`)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}
GetCharacters()

//Ejemplo: Me prometen una pizza:

let PromesaPizza = new Promise ((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promesa resuelta")
    },5000)//Supongamos que la promesa se demora 5 segundos y confirman la pizza
});
//Si me cumplen la promesa nos daría el resultado resolve. Ahora vamos a consultarla
//mediante el método then y luego decido que hacer con ella:

PromesaPizza
.then(response => console.log(response))
.catch(error => console.log(error))

PromesaPizza()







