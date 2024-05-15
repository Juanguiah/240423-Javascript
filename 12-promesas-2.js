
const axios = require('axios');
//MI primer petición api

const getCharacters = () => {
    axios.get('https11://rickandmortyapi.com/api/character')
    .then(response => console.log(response.data))
    .catch(error => console.log("mostrando error",error))
}

getCharacters()