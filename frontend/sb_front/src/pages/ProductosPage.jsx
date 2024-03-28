import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListProductos } from '../components/ListProductos';

export function ProductosPage() {
  const navigate = useNavigate();

  const redirectToInicio = () => {
    navigate('/inicio');
  };

  const redirectToCreateProducto = () => {
    navigate('/productos-create');
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-between py-3">
        <button
          className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6"
          onClick={redirectToInicio}
        >
          Inicio
        </button>
        <Link to="/productos">
          <h1 className="font-bold text-3xl mb-4">Productos Space Bikes</h1>
        </Link>
        <button
          className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6"
          onClick={redirectToCreateProducto}
        >
          <Link to="/productos-create">Create Producto</Link>
        </button>
      </div>
      <ListProductos />
    </div>
  );
}
