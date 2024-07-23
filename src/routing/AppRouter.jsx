import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";
import { ErrorPage } from "../components/ErrorPage";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { NavLink } from "react-router-dom";
import { Login } from "../components/Login";
import logo from '../assets/logo.png';

export const AppRouter = () => {
  return (
    <Router>
      {/* Menú de Navegación */}
      <header className="header-nav"> 
      <nav>
      <div className="logo">
              <img src={logo} alt="logo" className="logo-img"/>
          </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <NavLink to='/inicio'>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/articulos'>Artículos</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/acerca'>Acerca de</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/contacto'>Contacto</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/login'>Identificate</NavLink>
          </li>
        </ul>
      </nav>
      </header>

      {/* Configurar rutas */}
      <Routes>
          <Route path='/' element={<div className="content"><Home /></div>}></Route>
          <Route path='/inicio' element={<div className="content"><Home /></div>}></Route>
          <Route path='/articulos' element={<div className="content"><Articles /></div>}></Route>
          <Route path='/acerca-de' element={<div className="content"><About /></div>}></Route>
          <Route path='/contacto' element={<div className="content"><Contact /></div>}></Route>
          <Route path='/login' element={<div className="content"><Login /></div>}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
    </Router>
  )
}