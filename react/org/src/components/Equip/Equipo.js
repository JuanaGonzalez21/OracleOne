import React from 'react'
import "./Equipo.css"
import Colab from '../Colab/Colab'
import hexToRgba from 'hex-to-rgba'

function Equipo(props) {

    //Destructuración
    const { colorPrimario, id, titulo } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    // console.log(colaboradores.length > 0)

    const estiloTitulo = { borderColor: colorPrimario }
    const estiloSecundario = { backgroundColor: hexToRgba(colorPrimario, 0.6) }
    return <>
        {
            colaboradores.length > 0 &&
            <div>
                <section className='equipo' style={estiloSecundario}>
                    <input
                        type='color'
                        className='input-color'
                        value={colorPrimario}
                        onChange={(e) =>{
                            actualizarColor(e.target.value, id)}}
                    />
                    <h3 style={estiloTitulo}>{titulo}</h3>
                    <div className='colaboradores'>
                        {
                            colaboradores.map((colaborador, index) => <Colab
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                                like={like}
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