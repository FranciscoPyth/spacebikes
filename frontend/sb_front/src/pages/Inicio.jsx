// src/pages/Inicio.jsx
import React from 'react';
import { Navbar } from '../components/Navbar';
import logo from '../logo_space.png';


export function Inicio() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Bienvenido a tu Sistema de Gestión</h1>
        {/* Renderiza el componente compartido */}
        <Navbar />
        <img src={logo} alt="Logo" className="mx-auto mb-4" style={{ maxWidth: '200px' }} />
      </div>
    </div>
  );
}