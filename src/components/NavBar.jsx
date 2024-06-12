import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='w3-bar w3-blue'>
      <ul>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'><Link to="/">Home</Link></li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'><Link to="/productos">Productos</Link></li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'><Link to="/proveedores">Proveedores</Link></li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'><Link to="/pedidos">Pedidos</Link></li>
        <li className='w3-bar-item w3-button w3-right w3-hover-light-blue'><Link to="/ventas">Ventas</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;