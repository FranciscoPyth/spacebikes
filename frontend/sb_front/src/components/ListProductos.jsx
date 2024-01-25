import { useEffect, useState } from "react"
import { getAllProductos } from "../api/consultas_api"
import { useNavigate } from "react-router-dom";


// El useState se utiliza para almacenar valores
export function ListProductos({ producto }) {

    const navigate = useNavigate()

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        
        async function loadProductos() {
            const res = await getAllProductos();
            setProductos(res.data);
        }

        loadProductos();

    }, []);
    
    return <div className="grid grid-cols-2 gap-3">
        {productos.map(producto => (
            <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer" key={producto.id} 
            onClick={() => {
                navigate(`/productos/${producto.id}`)
            }}
            >
                <h1 className="font-bold uppercase">{producto.nombre}</h1>
                <p className="text-slate-400">${producto.precio}</p>
            </div>
        ))}
        </div>;
}