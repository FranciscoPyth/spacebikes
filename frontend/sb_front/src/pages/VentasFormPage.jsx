import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { createVenta, getAllClientes, getAllProductos } from '../api/consultas_api';

export function VentasFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  // Estados para almacenar la lista de clientes y productos
  const [clientes, setClientes] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Lógica para obtener la lista de clientes y productos
    // Utiliza las funciones correspondientes de tu API
    const fetchClientes = async () => {
      try {
        const response = await getAllClientes();
        setClientes(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de clientes:', error.message);
      }
    };

    const fetchProductos = async () => {
      try {
        const response = await getAllProductos();
        setProductos(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error.message);
      }
    };

    fetchClientes();
    fetchProductos();
  }, []);  // Ejecutar solo al montar el componente

  const onSubmit = async (data) => {
    // Lógica para crear/actualizar la venta
    await createVenta(data);
    toast.success('Venta Registrada', {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff"
      }
    });
    navigate("/ventas");
  };

  return (
    <div className='max-w-xl mx-auto'>
      {/* Botón para volver a la página de ventas */}
      <Link to="/ventas" className="block text-center m-4">
        <h1 className="font-bold text-3xl">Ventas</h1>
      </Link>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Cliente:
          <select
            {...register("cliente", { required: true })}
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          >
            {/* Mapear sobre la lista de clientes para generar opciones */}
            {clientes.map(cliente => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nombre}
              </option>
            ))}
          </select>
          {errors.cliente && <span>Debe seleccionar un cliente</span>}
        </label>

        <label>
          Producto:
          <select
            {...register("producto", { required: true })}
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          >
            {/* Mapear sobre la lista de productos para generar opciones */}
            {productos.map(producto => (
              <option key={producto.id} value={producto.id}>
                {producto.nombre}
              </option>
            ))}
          </select>
          {errors.producto && <span>Debe seleccionar un producto</span>}
        </label>

        <label>
          Importe Total:
          <input
            type="number"
            {...register("importe_total", { required: true, min: 0 })}
            className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
          />
          {errors.importe_total && <span>Se requiere ingresar un importe total válido</span>}
        </label>

        <button type="submit" className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Registrar Venta</button>
      </form>
    </div>
  );
}
