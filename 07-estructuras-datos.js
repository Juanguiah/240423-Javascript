let obj = {}; //Objeto JSON, diccionario de datos
let arr = []; // Array, matriz, listas, vector -> dimensiones.

let arryNumeros = [1,2,3,4,5,6,7] // 0-6 1 sola dimensión.

console.log(arryNumeros[6])

let arrPersonas = [
{
    nombre: "Daniel",
    apellido: "Garces",
},
{
    nombre: "Pedro",
    apellido: "Infante",
    hijos: [
        {
            nombre: "Ramón",
            apellido: "Infante",
            "custom:role": "Admin"
        },
        {
            nombre: "Alirio",
            apellido: "Infante",
            "custom:role": "Superadmin"
        },
        {
            nombre: "Alirio",
            apellido: "Infante",
            "custom:role": "Superadmin"
        }
    ]
}
];

//console.log(arrPersonas[1]["hijos"][0][2])
console.log(arrPersonas.length)
console.log(arrPersonas[1].hijos.length)



let personaDaniel = {
    nombre: "Daniel",
    apellido: "Garces"
}

console.log(personaDaniel["apellido"])
console.log(personaDaniel.apellido)



let personasPorFamilia = [
    [
        [
            [
                { nombre: "Juan", edad: 30, relacion: "Padre" }, //0
                { nombre: "Ana", edad: 28, relacion: "Madre" } // 1
            ], // 0
            [
                { nombre: "Pedro", edad: 10, relacion: "Hijo" },
                { nombre: "Elena", edad: 8, relacion: "Hija" }
            ] // 1
        ], // 0
        [
            [
                { nombre: "Carlos", edad: 35, relacion: "Padre" },
                { nombre: "María", edad: 32, relacion: "Madre" }
            ],
            [
                { nombre: "Luis", edad: 15, relacion: "Hijo" },
                { nombre: "Lucía", edad: 13, relacion: "Hija" }
            ]
        ] // 1
    ]
];
console.log(personasPorFamilia[0][0][0][0].nombre)
console.log(`Nombres: ${personasPorFamilia[0][0][0][0].nombre} Edad: ${personasPorFamilia[0][0][0][0].edad} Parentesco: ${personasPorFamilia[0][0][0][0].relacion}`);
console.log(`${personasPorFamilia[0][1][1][0].nombre} ${personasPorFamilia[0][1][1][0].edad} ${personasPorFamilia[0][1][1][0].relacion}`);
console.log("Nombres "+personasPorFamilia[0][1][1][0].nombre + personasPorFamilia[0][1][1][0].edad + personasPorFamilia[0][1][1][0].relacion)










console.log(personasPorFamilia[0][0][0][0].nombre);
console.log(personasPorFamilia[3].nombre,[3].edad,
console.log(personasPorFamilia[0],[0],[0].nombre, personasPorFamilia[0],[0],[0].edad, personasPotFamilia[0],[0,[0].relacion))
console.log(personasPorFamilia[0].[0].[0].nombre)

console.log(personasFamilia[3][0].nombre[3][1].edad[3][2].relacion)

console.log(personasPorFamilia[0][0][0][0])
console.log(personasPorFamilia[0][1][1][0])

console.log(personasPorFamilia[0][0][0][0][0]["nombre", "edad", "relacion"]) and here is the other one console.log(personasPorFamilia[0][0][1][1][0]["nombre", "edad", "relacion"]) 

console.log(personasPorFamilia[0][0][0][0][0]) // console.log(personasPorFamilia[0][0][1][1])

console.log(personasPorFamilia[0][1]["nombre"]) - concole.log(personasPorFamilia[0][0][0])

console.log(personaPorFamilia[0][0].d) 