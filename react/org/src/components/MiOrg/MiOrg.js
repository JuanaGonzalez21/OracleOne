import "./MiOrg.css"

function MiOrg(props) {

  console.log(props)
  //Estado utilizando hooks
  //useState
  
  // console.log(useState())

  //const [nombreVariable, funcionActualiza] = useState(valorInicial)
  //const [nombre, actualizarNombre] = useState("Juana")
  
  // const [mostrarinfo, actualizarMostrar] = useState(true)

  // const mostrar = () => {
  //   console.log("Mostrar/Ocultar elemento" , !mostrarinfo)
  //   actualizarMostrar(!mostrarinfo)
  // }


  return (
    <div>
        <section className='orgSection'>
            <h3 className='org-title'>Mi organización </h3>
            <img src='/img/btn.png' alt='add' onClick={props.cambiarMostrar}/>
        </section>
    </div>
  )
}

export default MiOrg