import React from 'react'
import "./Colab.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

function Colab(props) {

  const { nombre, puesto, foto, id, fav } = props.datos
  const { colorPrimario, eliminarColaborador, like } = props
  
  const colorEncabezado =  {
    backgroundColor: colorPrimario
  }

  //Ternario condicion ? seMuestra :  noMuestra

  return (
    <div className='colaborador'>
      <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar'/>
      <div className='encabezado' style={colorEncabezado}>
        <img src={foto} alt={nombre}></img>

      </div>
      <div className='info'>
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>
        { fav ? <AiFillHeart color="red" onClick={()=>like(id)}/> :<AiOutlineHeart onClick={()=>like(id)}/>}
        
        
      </div>
    </div>
  )
}

export default Colab