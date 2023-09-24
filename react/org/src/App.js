import { useState } from 'react';
import { Header } from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equip/Equipo';

import './App.css';

const App = () => {

  const [mostrarForm, actualizarMostrar] = useState(false);
  //Iniciar con un arreglo vacio
  const [colaboradores, actualizarColaboradores] = useState([]);
  //Ternario --> tengamos una condicion ? y si esta condicion es verdadera se muestra lo que pongas = 
  //condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm)
  }

  //Registrar Colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    //Concepto Spread opator
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Lista de equipos

  const equipos = [
    {
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }, {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }, {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }, {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }, {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }, {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }, {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      {/* {mostrarForm ? <Form/> : <></>}  */}
      
      {
        mostrarForm && <Form
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}/>
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
        key={equipo.titulo} 
        datos={equipo}
        colaboradores={colaboradores}
        />
        )
      }


    </div>
  );
}

export default App;
