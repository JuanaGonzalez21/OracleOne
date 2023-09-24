import React from 'react'
import "./Colab.css"

function Colab(props) {

  const {nombre, puesto, foto, equipo} = props.datos
  return (
    <div className='colaborador'>
        <div className='encabezado'>
          <img src={foto} alt={nombre}></img>

        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
        </div>
    </div>
  )
}

export default Colab