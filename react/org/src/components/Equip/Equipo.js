import React from 'react'
import "./Equipo.css"
import Colab from '../Colab/Colab'

function Equipo(props) {

    //Destructuración
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores, eliminarColaborador } = props

    console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario }
    const estiloSecundario = { backgroundColor: colorSecundario }
    return <>
        {
            colaboradores.length > 0 &&
            <div>
                <section className='equipo' style={estiloSecundario}>
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className='colaboradores'>
                        {
                            colaboradores.map((colaborador, index) => <Colab
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                            />
                            )
                        }

                    </div>
                </section>
            </div>
        }
    </>
}

export default Equipo