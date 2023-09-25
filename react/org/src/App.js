import { useState } from 'react';
import { Header } from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equip/Equipo';
import { v4 as uuid } from 'uuid'

import './App.css';
import Footer from './components/Footer/Footer';

const App = () => {

  const [mostrarForm, actualizarMostrar] = useState(false);

  //Iniciar con un arreglo vacio
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/JuanaGonzalez21.png",
    nombre: "Juana Gonzalez",
    puesto: "Dev",
    fav: false

  }]);
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }, {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }, {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }, {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }, {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }, {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }, {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])
  //Ternario --> tengamos una condicion ? y si esta condicion es verdadera se muestra lo que pongas = 
  //condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm)
  }

  //Registrar Colaborador

  console.log(colaboradores)

  const registrarColaborador = (colaborador) => {
    console.log("Colaborador", colaboradores)

    //Concepto Spread opator
    actualizarColaboradores([...colaboradores, colaborador])
    console.log("Colaboradoresss", colaboradores)
  }

  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equpo

  const actualizarColor = (color, id) => {
    //console.log('Actualizar: ', color, ' ', id)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }


  const like = (id) => {
    const likeColab = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }

      return colaborador
    })

    actualizarColaboradores(likeColab)
  }


  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Form/> : <></>}  */}

      {
        mostrarForm && <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          key={equipo.id}
          datos={equipo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
        )
      }

      <Footer />


    </div>
  );
}

export default App;
