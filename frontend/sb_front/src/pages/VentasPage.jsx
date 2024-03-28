import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListVentas } from '../components/ListVentas';

export function VentasPage() {
  const navigate = useNavigate();

  const redirectToInicio = () => {
    navigate('/inicio');
  };

  const redirectToAgregarVenta = () => {
    navigate('/ventas-create');
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
        <Link to="/ventas">
          <h1 className="font-bold text-3xl mb-4">Ventas</h1>
        </Link>
        <button
          className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6"
          onClick={redirectToAgregarVenta}
        >
          <Link to="/ventas-create">Agregar Venta</Link>
        </button>
      </div>
      <ListVentas />
    </div>
  );
}
