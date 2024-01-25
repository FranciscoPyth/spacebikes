// src/pages/Inicio.jsx
import React from 'react';
import { Navbar } from '../components/Navbar';

export function Inicio() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-8 mb-4 text-indigo-700'>Bienvenido a tu Sistema de Gestión</h1>
      <Navbar />
    </div>
  );
};
