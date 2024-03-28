import { useEffect, useState } from "react";
import { getAllVentas, getCliente } from "../api/consultas_api";  // Asegúrate de tener getCliente importado
import { useNavigate } from "react-router-dom";

export function ListVentas() {
  const navigate = useNavigate();
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    async function loadVentas() {
      try {
        const res = await getAllVentas();
        const ventasConClientes = await Promise.all(res.data.map(async (venta) => {
          const clienteResponse = await getCliente(venta.cliente);
          const ventaConCliente = { ...venta, cliente: clienteResponse.data.nombre };
          return ventaConCliente;
        }));
        setVentas(ventasConClientes);
      } catch (error) {
        console.error('Error al obtener las ventas:', error.message);
      }
    }

    loadVentas();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      {ventas.map(venta => (
        <div
          className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
          key={venta.id}
          onClick={() => {
            navigate(`/ventas/${venta.id}`);
          }}
        >
          {/* Mostrar el nombre del cliente en lugar del ID */}
          <h1 className="font-bold uppercase">{venta.cliente}</h1>
          <p className="text-slate-400">Importe Total: {venta.importe_total}</p>
          <p className="text-slate-400">Fecha de Venta: {venta.fecha_venta}</p>
        </div>
      ))}
    </div>
  );
}
