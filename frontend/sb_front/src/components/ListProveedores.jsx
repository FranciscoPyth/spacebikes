import { useEffect, useState } from "react"
import { getAllProveedores } from "../api/consultas_api"
import { useNavigate } from "react-router-dom";


// El useState se utiliza para almacenar valores
export function ListProveedores({ proveedor }) {

    const navigate = useNavigate()

    const [proveedores, setProveedor] = useState([]);

    useEffect(() => {
        
        async function loadProveedores() {
            const res = await getAllProveedores();
            setProveedor(res.data);
        }

        loadProveedores();

    }, []);
    
    return <div className="grid grid-cols-1 gap-3">
        {proveedores.map(proveedor => (
            <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer text-center" key={proveedor.id} 
            onClick={() => {
                navigate(`/proveedores/${proveedor.id}`)
            }}
            >
                <h1 className="font-bold uppercase center">{proveedor.nombre_empresa}</h1>
                <p className="text-slate-400 center">Tel: {proveedor.contacto}</p>
            </div>
        ))}
        </div>;
}