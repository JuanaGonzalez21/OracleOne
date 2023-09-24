import React from 'react'
import "./List.css"

function List(props) {

    //Para recorrer un arreglo usaremos el método map 
    // -> arreglo.map(( equipo ) => {
    //  
    // })

    const manejarCambio = (e) =>{
        //console.log("cambio")
        props.setValor(e.target.value)
    }

    return (
        <div className='lista-opciones'>
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionat equipo</option>
                {props.equipos.map((equipo, index ) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    )
}

export default List