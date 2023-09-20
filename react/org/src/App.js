import { useState } from 'react';
import { Header } from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';

import './App.css';

const App = () => {

  const [mostrarForm, actualizarMostrar] = useState(true);
  
  //Ternario --> tengamos una condicion ? y si esta condicion es verdadera se muestra lo que pongas = 
  //condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarForm)
  }

  return (
    <div>
      <Header/>
      {/* {mostrarForm ? <Form/> : <></>}  */}
      {mostrarForm && <Form/>}

      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  );
}

export default App;
