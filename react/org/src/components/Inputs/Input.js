
import React from 'react'
import "./Input.css"

function Input(props) {

  //const [valor, setValor] = useState("")

  //Empezar a controlar como se comportan los imputs
  
  const manejarCambio = (e) =>{
     //console.log("cambio", e.target.value)
     props.setValor(e.target.value)
  }
  //console.log("Datos: ", props)
  const placeholderModificado = `${props.placeholder}...`
  return (
    <div className='campo-texto'>
      <label >{props.titulo}</label>
      <input
        placeholder={placeholderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
      />
    </div>
  )
}

export default Input




