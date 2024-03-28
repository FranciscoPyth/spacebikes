import { Link } from "react-router-dom"


export function Navigation() {
    return (
        <div className="flex justify-between py-3" style={{ padding: "20px" }}>
            <Link to="/productos">
                <h1 className="font-bold text-3xl mb-4">Productos App</h1>
            </Link>
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to="/productos-create">Create Producto</Link>
        </button>
        </div>
    )
}