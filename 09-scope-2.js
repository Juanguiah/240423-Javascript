let globalNombre = "Daniel";

function sayHello(){
    let localNombre = "José" // "Global"
    console.log(globalNombre)
    console.log(`Scope1 ${localNombre}`)
    
    function sayHello2(){
        let localNombre2 = "Antonio"
        console.log(`sayHello2 ${globalNombre}`)
        console.log(localNombre) // "Local"
    }
    //console.log(`Scope1 ${localNombre2}`)
    sayHello2()
}
sayHello()

function calculateArea(){
    let localNombre = "Ramiro"
    console.log(globalNombre)
    console.log(localNombre)
}

function calculateSuma(){
    let localNombre = "Antonio"
    console.log(globalNombre)
    console.log(localNombre)
}
console.log(globalNombre)
//console.log(localNombre)
sayHello()
calculateArea()
calculateSuma()