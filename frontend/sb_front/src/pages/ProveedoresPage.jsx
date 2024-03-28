import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListProveedores } from '../components/ListProveedores';

export function ProveedoresPage() {
  const navigate = useNavigate();

  const redirectToInicio = () => {
    navigate('/inicio');
  };

  const redirectToAgregarProveedor = () => {
    navigate('/proveedores-create');
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
        <Link to="/proveedores">
          <h1 className="font-bold text-3xl mb-4">Proveedores</h1>
        </Link>
        <button
          className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6"
          onClick={redirectToAgregarProveedor}
        >
          <Link to="/proveedores-create">Agregar Proveedor</Link>
        </button>
      </div>
      <ListProveedores />
    </div>
  );
}
