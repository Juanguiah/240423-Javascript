
const axios = require('axios');
//Sintaxis de una promesa
let miPrimerPromesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        reject("Promesa no resuelta")
    },5000)
});


//Como usar una promesa

miPrimerPromesa
.then(response => console.log(response)) // LLega la respuesta en caso que la promesa resolvió
.catch(error => console.log(error)) //Lega la respuesta en caso que la promesa rompió o rechazó


//MI primer petición api

const getCharacters = () => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}

getCharacters()