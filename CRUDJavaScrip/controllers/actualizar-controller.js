import { clienServices } from "../services/client-services.js"

const formulario = document.querySelector("[data-form]")
const obtenerInformacion = async () => {
    const url = new URL(window.location)
    const id = url.searchParams.get("id")

    if (id == null) {
        window.location.href = "../screens/error.html"
    }

    const nombre = document.querySelector("[data-nombre]")
    const email = document.querySelector("[data-email]")


    try {
        const perfil = await clienServices.detalleCliente(id)
        if(perfil.nombre && perfil.email ){
            nombre.value = perfil.nombre;
        email.value = perfil.email;
        }else {
            //Mandar llamar el error
            throw new Error()
        }
        
    } catch (error) {
        window.location.href = "../screens/error.html"
    }



}

obtenerInformacion();


formulario.addEventListener("submit", (evento) => {

    //Evitar que el formulario mande la información
    evento.preventDefault()
    const url = new URL(window.location)
    const id = url.searchParams.get("id")
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email]").value


    clienServices.actualizarCliente(nombre, email, id).then(() => { window.location.href = "../screens/edicion_concluida.html" })
})