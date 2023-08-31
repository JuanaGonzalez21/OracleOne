const ciudadesDisponibles = new Array("Bogotá", "Lima", "Santiago", "Montevideo")

const paisesDisponibles = ["Colombia", "Peru", "Chile", "Argentina", "Brasil", "Uruguay", "Venezuela"]
//  console.log(paisesDisponibles)

const cantidadCiudades = ciudadesDisponibles.length
// console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`)
// console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`)

// Remover el primer elemento
ciudadesDisponibles.shift()
console.log(ciudadesDisponibles)
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`)

// Remover el último elemento
ciudadesDisponibles.pop()
console.log(ciudadesDisponibles)
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`)

// Filtro de elementos de la lista
const paisesFiltrados = paisesDisponibles.filter((e) => e == "Brasil")
console.log(paisesFiltrados)


const paisesFiltradosNoLetras = paisesDisponibles.filter((e) => e.length > 6)
console.log(paisesFiltradosNoLetras)

console.log(paisesDisponibles.join(' - '))

//Unificar los elementos en una cadena de caracteres
console.log(paisesDisponibles.sort())

//Coincidencia de posición
console.log(`Perú está en la posición: ${paisesDisponibles.indexOf('Peru')}`)

// Unificar dos listas

const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles).sort()
console.log(listaPaisesYCiudades)
