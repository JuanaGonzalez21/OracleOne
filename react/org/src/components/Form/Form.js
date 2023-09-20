import React, { useState } from 'react'
import "./Form.css"
import Input from '../Inputs/Input'
import List from '../ListOptions/List'
import Button from '../Button/Button'

function Form() {

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const manejarEnvio = (e) => {
        //Se que quita la responsabilidad al navegador de como tiene que comportarse
        e.preventDefault();
        //console.log("Manejar el envio", e)
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        console.log(datosEnviar)
    }



    return (
        <div className='form'>
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador</h2>
                <Input
                    titulo="Nombre"
                    placeholder="Ingresar Nombre"
                    required={true}
                    valor={nombre}
                    setValor={setNombre} />
                <Input
                    titulo="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    valor={puesto}
                    setValor={setPuesto} />
                <Input
                    titulo="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    valor={foto}
                    setValor={setFoto} />
                <List
                    valor={equipo}
                    setValor={setEquipo}

                />
                <Button>
                    Crear
                </Button>
            </form>
        </div>
    )
}

export default Form