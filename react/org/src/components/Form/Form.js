import React, { useState } from 'react'
import "./Form.css"
import Input from '../Inputs/Input'
import List from '../ListOptions/List'
import Button from '../Button/Button'
import { v4 as uuid } from 'uuid'

function Form(props) {

    //const [id, setId] = useState("")
    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        //Se que quita la responsabilidad al navegador de como tiene que comportarse
        e.preventDefault();
        //console.log("Manejar el envio", e)
        let datosEnviar = {
            id: uuid(),
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }

        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color})
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
                    equipos ={props.equipos}

                />
                <Button>
                    Crear
                </Button>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Input
                    titulo="Titulo"
                    placeholder="Ingresar titulo"
                    required={true}
                    valor={titulo}
                    setValor={setTitulo} />
                <Input
                    titulo="Color"
                    placeholder="Ingresar el color en Hex"
                    required
                    valor={color}
                    setValor={setColor}
                    type="color" />
                    
                <Button>
                    Crear Equipo
                </Button>
            </form>
        </div>
    )
}

export default Form