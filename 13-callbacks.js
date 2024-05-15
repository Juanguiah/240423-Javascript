//un callback, es una función que recibe como argumento otra función

setTimeout(()=>{})

//setTimeout() función
// argumento : ()=>()  / ()=>{} / ()=>

const saludar = (callback) => {
    callback('Hola desde la función de retorno de la llamada')
}

saludar(response => {
    console.log(response)
})

const saludarByNombre = (nombre,callback) => {
    if(nombre == 'Daniel'){
        callback(null, 'Hola Daniel')
    }else{
        const e = new Error('No se llama Daniel')
        callback(e, null)
    }
}

saludarByNombre('Daniel', (err, response)=>{
    if(err){
        console.log("Se ha presentado un error", err)
        return;
    }
    console.log(response)
})