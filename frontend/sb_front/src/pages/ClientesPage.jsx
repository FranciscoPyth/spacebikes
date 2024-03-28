import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ListClientes } from '../components/ListClientes';

export function ClientesPage() {
  const navigate = useNavigate();

  const redirectToInicio = () => {
    navigate('/inicio');
  };

  const redirectToAgregarCliente = () => {
    navigate('/clientes-create');
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
        <Link to="/clientes">
          <h1 className="font-bold text-3xl mb-4">Clientes</h1>
        </Link>
        <button
          className="bg-indigo-500 px-3 py-2 rounded-lg w-1/6"
          onClick={redirectToAgregarCliente}
        >
          <Link to="/clientes-create">Agregar Cliente</Link>
        </button>
      </div>
      <ListClientes />
    </div>
  );
}
