import React, { useState, useEffect } from "react";
import { getAllProductos, getAllProveedores } from "../api/consultas_api";
import { useNavigate } from "react-router-dom";

export function ListProductos() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProveedor, setSelectedProveedor] = useState(null);
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const productosRes = await getAllProductos();
        setProductos(productosRes.data);

        const proveedoresRes = await getAllProveedores();
        setProveedores(proveedoresRes.data);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    }

    fetchData();
  }, []);

  // Filtrar productos por nombre y proveedor
  const filteredProductos = productos.filter((producto) =>
  producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
  (selectedProveedor ? producto.proveedor === parseInt(selectedProveedor, 10) : true)
  );


  return (
    <div className="text-center mt-5">
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 rounded-md border border-gray-400 focus:outline-none focus:border-indigo-500 bg-zinc-800"
      />

      {/* Filtro por proveedor */}
      <select
        value={selectedProveedor || ""}
        onChange={(e) => setSelectedProveedor(e.target.value)}
        className="p-2 rounded-md border border-gray-400 focus:outline-none focus:border-indigo-500 bg-zinc-800 ml-3"
      >
        <option value="">Todos los proveedores</option>
        {proveedores.map((proveedor) => (
          <option key={proveedor.id} value={proveedor.id}>
            {proveedor.nombre_empresa}
          </option>
        ))}
      </select>

      {/* Lista de productos filtrados en formato de tabla */}
      <div className="mt-4">
        <table className="table-auto w-full">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-2">Imagen</th>
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Precio</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProductos.map((producto) => (
              <tr
                key={producto.id}
                className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
                onClick={() => {
                  navigate(`/productos/${producto.id}`);
                }}
              >
                <td className="px-4 py-2">
                  {producto.imagen ? (
                    <img
                      src={`${producto.imagen}`}
                      alt={producto.nombre}
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  ) : (
                    <span>No hay imagen disponible</span>
                  )}
                </td>
                <td className="px-4 py-2 font-bold uppercase">{producto.nombre}</td>
                <td className="px-4 py-2 text-slate-400">${producto.precio_consumidor}</td>
                <td className="px-4 py-2">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
