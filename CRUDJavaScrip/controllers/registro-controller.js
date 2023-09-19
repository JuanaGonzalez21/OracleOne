import { clienServices } from "../services/client-services.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit",(evento) =>{
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value
    const email = document.querySelector("[data-email").value
    clienServices.crearCliente(nombre,email).then(() => {
    //Redireccionar a una página 
    window.location.href = "../screens/registro_completado.html"


    }).catch(err => console.log(err))
})