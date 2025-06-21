import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link> | 
      <Link to="/projects">Proyectos</Link> | 
      <Link to="/resume">Currículum</Link>
    </nav>
  );
}

export default Navbar;