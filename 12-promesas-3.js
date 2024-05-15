const GetRequest = (url) => {
    return new Promise((resolve, reject)=>{
        const request = new XMLHttpRequest();
        request.open('GET',url);
        request.onload = () => {
            if(request.status === 200){
                resolve(request.responseText)
            }else {
                reject('Error al cargar los datos')
            }
        }
        request.send();
    })
}

GetRequest('https://rickandmortyapi.com/api/character')
.then(response => console.log(response))
.catch(error => console.log(error))