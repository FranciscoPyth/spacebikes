// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="flex items-center justify-center">
      <ul className='w-1/2'>
        <button className='bg-indigo-500 hover:bg-indigo-400 p-3 rounded-lg block w-full mt-3'>
          <Link to="/productos" className="text-white">Productos</Link>
        </button>
        <button className='bg-indigo-500 hover:bg-indigo-400 p-3 rounded-lg block w-full mt-3'>
          <Link to="/proveedores" className="text-white">Proveedores</Link>
        </button>
        <button className='bg-indigo-500 hover:bg-indigo-400 p-3 rounded-lg block w-full mt-3'>
          <Link to="/clientes" className="text-white">Clientes</Link>
        </button>
        <button className='bg-indigo-500 hover:bg-indigo-400 p-3 rounded-lg block w-full mt-3'>
          <Link to="/ventas" className="text-white">Ventas</Link>
        </button>
      </ul>
    </nav>
  );
};
