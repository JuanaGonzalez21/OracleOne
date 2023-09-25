import React from 'react'
import "./Colab.css"
import { AiFillCloseCircle } from "react-icons/ai"

function Colab(props) {

  const { nombre, puesto, foto } = props.datos
  const { colorPrimario, eliminarColaborador } = props

  const colorEncabezado =  {
    backgroundColor: colorPrimario
  }

  return (
    <div className='colaborador'>
      <AiFillCloseCircle onClick={eliminarColaborador} className='eliminar'/>
      <div className='encabezado' style={colorEncabezado}>
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