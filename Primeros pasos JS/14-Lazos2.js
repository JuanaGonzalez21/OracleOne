//Mapa 
const datos = [{
    'ciudad' : 'Bogotá',
    'precio' : '500'
},
{
    'ciudad' : 'Lima',
    'precio' : '400'
},
{
    'ciudad' : 'Santiago',
    'precio' : '300'
},
{
    'ciudad' : 'Montevideo',
    'precio' : '200'
}]

const presupuestoDisponible =400;

let i = 0
// while (i < datos.length  && datos[i].precio > presupuestoDisponible ) {
//     i++;
// }
// if (i == datos.length) {
//     console.log("No tenemos pasajes disponibles")
// } else {
//     console.log(`Puedes comprar pasaje para : ${datos[i].ciudad}`)
// }

let ciudadSelecciona = '';
do{
 if( datos[i].precio <= presupuestoDisponible ){
    ciudadSelecciona = datos[i].ciudad;
    break
    
 }
 i++;
}while(i < datos.length && ciudadSelecciona == ''  )

if (ciudadSelecciona == '') {
    console.log("No tenemos pasajes disponibles")
} else {
    console.log(`Puedes comprar pasaje para : ${ciudadSelecciona}`)
}