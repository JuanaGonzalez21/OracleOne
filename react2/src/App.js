import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Header from './components/Header';
import Home from "./pages/Home"
import Page404 from './pages/Page404';
import Sobre from "./pages/Sobre"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {

  // const location = window.location.pathname
  // //console.log(location)

  // const Router = () => {
  //   if (location === "/") {
  //     return <Home />
  //   } else {
  //     return <Sobre />
  //   }
  // }

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='*' element={<Page404/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
