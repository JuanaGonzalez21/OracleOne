




//Los parametros que va a recibir son (método,url)

//CRUD - Método HTTP
// Create - GET
// Read - POST
// Update - PUSH/PATH
// Delete - DELETE


//FETCH IP 
//FUNCION NATIVA DEL NAVEGADOR

// <!--------- Forma 1 de llamar la data --------------->

 const listaClientes = () => 
    fetch("http:///localhost:3000/perfil").then(respuesta => respuesta.json())

// <!--------- Forma 2 de llamar la data --------------->

// const listaClientes = () => {

//     //Automaticamente toma el método GET
//     return fetch("http:///localhost:3000/perfil").then(respuesta => {
//         //Recibe la data y la transforma a .json  
//         return respuesta.json()
//     })
// }


// <!--------- Forma 3 de llamar la data --------------->


// const listaClientes = () =>{
//     //Funcion asincrona PROMISE
//     const promise = new Promise((resolve, reject) => {
//         //Conseguirt buena comunicación entre el Front end y el Backend
//         const http =new  XMLHttpRequest();
//         http.open("GET", "http:///localhost:3000/perfil" )

//         http.send();

//         http.onload = () =>{
//             const response = JSON.parse(http.response) ;
//             if(http.status >= 400){
//                 reject(response)
//             }else {
//                 resolve(response)
//             }
//         }
//     })

//     return promise
// }



//Crear el ciente

const crearCliente = (nombre, email) =>{
    return fetch("http:///localhost:3000/perfil", {
        method: "POST",
        //Encabezados para tener un estandar de lo que le servidor va a recibir
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email, id: uuid.v4()})
    })
}

const eliminarCliente = (id) => {
    return fetch(`http:///localhost:3000/perfil/${id}`, {
        method: "DELETE",
        //Encabezados para tener un estandar de lo que le servidor va a recibir
    })
}

const detalleCliente = (id) => {
     return fetch(`http:///localhost:3000/perfil/${id}`).then(respuesta => respuesta.json())
}

const actualizarCliente = (nombre, email, id ) => {
    return fetch(`http:///localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({nombre,email}),
        
    })
        .then((respuesta) => respuesta)
}
export const clienServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente
}



