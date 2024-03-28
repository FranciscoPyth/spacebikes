import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  const redirectToProductos = () => {
    navigate('/productos');
  };

  const redirectToProveedores = () => {
    navigate('/proveedores');
  };

  const redirectToClientes = () => {
    navigate('/clientes');
  };

  const redirectToVentas = () => {
    navigate('/ventas');
  };

  return (
    <nav className="flex items-center justify-center">
      <ul className='w-1/2'>
        <button
          className='bg-orange-500 hover:bg-orange-400 p-3 rounded-lg block w-full mt-3'
          onClick={redirectToProductos}
        >
          Productos
        </button>
        <button
          className='bg-orange-500 hover:bg-orange-400 p-3 rounded-lg block w-full mt-3'
          onClick={redirectToProveedores}
        >
          Proveedores
        </button>
        <button
          className='bg-orange-500 hover:bg-orange-400 p-3 rounded-lg block w-full mt-3'
          onClick={redirectToClientes}
        >
          Clientes
        </button>
        <button
          className='bg-orange-500 hover:bg-orange-400 p-3 rounded-lg block w-full mt-3'
          onClick={redirectToVentas}
        >
          Ventas
        </button>
      </ul>
    </nav>
  );
}
