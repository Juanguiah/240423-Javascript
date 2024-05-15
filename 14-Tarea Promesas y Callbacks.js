
//Promesas:
//Ejemplo1: Me prometen una pizza:

const PromesaPizza = ()=>{
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            let VariableAleatoria = Math.random();
            if (VariableAleatoria<0.5){
                resolve("Me trajeron una pizza")
            }
            else{
                reject("No llegó la pizza :( ")
            }
        },5000)//Supongamos que la promesa se demora 5 segundos en consultar por la pizza
    });
}
//Si me cumplen la promesa nos daría el resultado resolve. Ahora vamos a consultarla
//mediante el método then y luego decido que hacer con ella:

PromesaPizza()
.then(response => console.log(response))
.catch(error => console.log(error))

//Callbacks (Funcion que recibe como argumento otra funcion):
//Ejemplo1: Se pregunta por el nombre del usuario en la funcion ObtenerNombre y aleatoriamente
//se decide si retorna el nombre o no, luego en la funcion externa GanadorBaloto por medio
// de una variable aleatoria y un condicional
function GanadorBaloto (nombre){
    setTimeout(() => {
        let VariableAleatoria = Math.random();
        if (VariableAleatoria<0.5){
            //alert("Hola"+ nombre + "eres el feliz ganador");
            console.log("Hola "+ nombre + " eres el feliz ganador");
        }
        else{
            //alert("Hola"+ nombre + "en esta oportunidad no eres el ganador");
            console.log("Hola "+ nombre + " no eres el ganador");
        }
    },2000)
    
    }
const ObtenerNombre = (callback) =>{
    //let nombre=window.prompt("Por favor ingrese su nombre");
    let nombre ="Juangui"
    callback(nombre);
}
ObtenerNombre(GanadorBaloto);

//Forma corta:
const GanadorBalotoAleatorio = (nombre, callback) =>{
    setTimeout(() => {
        let VariableAleatoria = Math.random();
        if (VariableAleatoria<0.5){
            //alert("Hola"+ nombre + "eres el feliz ganador");
            callback (`Hola ${nombre}, eres el ganador`)
        }
        else{
            //alert("Hola"+ nombre + "en esta oportunidad no eres el ganador");
            callback (`Hola ${nombre}, no eres el ganador`)
        }
    },2000)
    
    }
let nombre=window.prompt("Por favor ingrese su nombre");
GanadorBalotoAleatorio(nombre, (response)=>{
    console.log(response)
})