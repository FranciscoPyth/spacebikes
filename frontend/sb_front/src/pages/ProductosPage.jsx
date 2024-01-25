import React from 'react';
import { Link } from 'react-router-dom';
import { ListProductos } from '../components/ListProductos';


export function ProductosPage() {
  return (
    <div>
        <div className="flex justify-between py-3">
            <button className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6">
                <Link to="/inicio">Inicio</Link>
            </button>
            <Link to="/productos">
                <h1 className="font-bold text-3xl mb-4">Productos Space Bikes</h1>
            </Link>
            <button className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6">
                <Link to="/productos-create">Create Producto</Link>
            </button>
        </div>
        <ListProductos />
    </div>
  );
}
