import { clienServices } from "../services/client-services.js";


const crearNuevaLinea = (nombre, email ,id) => {
  //console.log(id)
  const linea = document.createElement("tr")
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?id=${id}"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete" id="${id}"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    
  `
  linea.innerHTML = contenido
  const btn = linea.querySelector("button")
  btn.addEventListener("click", () =>{
    const id = btn.id
    clienServices.eliminarCliente(id).then( respuesta => {
    }).catch(err => alert("Ocurrio un error al eliminar el usuario"))
  })

  const url = linea.querySelector("a")
  return linea
};


//seleccionamos la tabla donde va a ir el contenido
const table = document.querySelector("[data-table]")

clienServices
  .listaClientes()
  .then((data) => {
    if(data => 1){
    data.forEach(({nombre, email, id })=> {
      const nuevaLinea = crearNuevaLinea(nombre, email, id)
      table.appendChild(nuevaLinea)
    });
  }else {
    const contenido = `
    <h1>No hay clientes registrados</h1>
    `
    return contenido
  }
  }).catch((error) => alert("Ocurrio un erro al capturar la información"))
