const ciudad1 = "Bogotá"
const ciudad2 = "Lima"
const ciudad3 = "Santiago"

//Declarar arreglos

const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago")
//  console.log(ciudadesDisponibles)

// Definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Argentina", "Brasil"]
//  console.log(paisesDisponibles)


paisesDisponibles.push('Uruguay')
ciudadesDisponibles.push('Montevideo')

// console.log(ciudadesDisponibles)
// console.log(paisesDisponibles)

//Método para insertar al inicio del array
paisesDisponibles.unshift("Ecuador")
ciudadesDisponibles.unshift('Montevideo')

// console.log(ciudadesDisponibles)
// console.log(paisesDisponibles)

console.log(paisesDisponibles[0])
console.log(ciudadesDisponibles[0])

paisesDisponibles.splice(1, 2, 'Venezuela', 'Paraguay');
console.log(paisesDisponibles)
