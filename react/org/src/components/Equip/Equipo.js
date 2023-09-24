import React from 'react'
import "./Equipo.css"
import Colab from '../Colab/Colab'

function Equipo(props) {

    //Destructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos 
    const { colaboradores } = props

    const estiloTitulo ={  borderColor: colorPrimario   }
    const estiloSecundario = {backgroundColor: colorSecundario}
    return (
        <div>
            <section className='equipo' style={estiloSecundario}>
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className='colaboradores'>
                    {
                        colaboradores.map((colaborador, index)=> <Colab datos={colaborador} key={index}/>)
                    }

                </div>
            </section>
        </div>
    )
}

export default Equipo