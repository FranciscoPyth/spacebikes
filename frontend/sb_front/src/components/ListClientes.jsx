import { useEffect, useState } from "react";
import { getAllClientes } from "../api/consultas_api";
import { useNavigate } from "react-router-dom";

export function ListClientes({ cliente }) {
  const navigate = useNavigate();
  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    async function loadClientes() {
      const res = await getAllClientes();
      setCliente(res.data);
    }

    loadClientes();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-3">
      {clientes.map((cliente) => (
        <div
          className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
          key={clientes.id}
          onClick={() => {
            navigate(`/clientes/${cliente.id}`);
          }}
        >
          <h1 className="font-bold uppercase">{cliente.nombre}</h1>
          <p className="text-slate-400">Tel: {cliente.direccion}</p>
        </div>
      ))}
    </div>
  );
}
