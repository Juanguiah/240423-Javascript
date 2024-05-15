function saludar(nombre){
    console.log("Hola "+ nombre)
}

function sayHello(callback){
    callback();
}

sayHello(function(){
    saludar("Juanita")
})