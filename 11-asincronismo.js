//Sincronismo
console.log("Hola");
alert("SOy una alerta")
function sayHello(){
    console.log("saludando")
}
sayHello()
console.log("Fin")

//Asincronismo
console.log("Hola");
setTimeout(()=>{
    console.log("Soy una operacion asíncrona");
},10000)
console.log("Fin");



