import { useForm } from 'react-hook-form';
import { createProducto, deleteProducto, getAllProveedores, updateProducto, getProducto } from '../api/consultas_api';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

export function ProductosFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();

    // Estado para almacenar la lista de proveedores y el proveedor seleccionado
    const [proveedores, setProveedores] = useState([]);
    const [selectedProveedor, setSelectedProveedor] = useState(null);

    useEffect(() => {
        const fetchProveedores = async () => {
            try {
                const response = await getAllProveedores();
                setProveedores(response.data);
            } catch (error) {
                console.error('Error al obtener la lista de proveedores:', error.message);
            }
        };

        fetchProveedores();
    }, []);  // Ejecutar solo al montar el componente

    const onSubmit = async (data) => {
        if (params.id) {
            await updateProducto(params.id, data);
            toast.success('Producto Actualizado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        } else {
            await createProducto(data);
            toast.success('Producto Creado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }

        navigate("/productos");
    };

    useEffect(() => {
        async function loadProducto() {
            if (params.id) {
                const res = await getProducto(params.id);
                setValue('nombre', res.data.nombre);
                setValue('precio', res.data.precio);

                // Verifica si hay un proveedor asociado
                if (res.data.proveedor) {
                    // Set the selected provider in the state
                    setSelectedProveedor(res.data.proveedor.id);

                    // Prepopulate the dropdown with the selected provider
                    setValue('proveedor', res.data.proveedor.id);
                }
            }
        }
        loadProducto();
    }, [params.id, setValue, setProveedores]);

    // Efecto para actualizar el valor del proveedor en el formulario
    useEffect(() => {
        setValue('proveedor', selectedProveedor || "");
    }, [selectedProveedor, setValue]);

    return (
        <div className='max-w-xl mx-auto' style={{ padding: "20px" }}>
            {/* Botón para volver a la página de productos */}
            <Link to="/productos" className="block text-center m-4">
                <h1 className="font-bold text-3xl">Productos Space Bikes</h1>
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre:
                    <input
                        type="text"
                        {...register("nombre", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.nombre && <span>Se requiere ingresar un nombre</span>}
                </label>

                <label>
                    Precio:
                    <input
                        type="number"
                        step="0.01"
                        {...register("precio", { required: true, min: 0 })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.precio && <span>Se requiere ingresar un precio válido</span>}
                </label>

                <label>
                    Proveedor:
                    <select
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                        {...register("proveedor", { required: true })}
                        value={selectedProveedor || ""}
                        onChange={(e) => {
                            setSelectedProveedor(e.target.value);
                            setValue('proveedor', e.target.value);
                        }}
                    >
                        {/* Mapear sobre la lista de proveedores para generar opciones */}
                        {proveedores.map((proveedor) => (
                            <option key={proveedor.id} value={proveedor.id}>
                                {proveedor.nombre_empresa}
                            </option>
                        ))}
                    </select>
                    {errors.proveedor && <span>Debe seleccionar un proveedor</span>}
                </label>

                <button type="submit" className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {params.id && (
                <button
                    className='bg-red-500 p-3 rounded-lg w-full mt-3'
                    onClick={async () => {
                        const accepted = window.confirm('Are you sure?');
                        if (accepted) {
                            await deleteProducto(params.id);
                            toast.success('Producto Eliminado', {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                },
                            });
                            navigate("/productos");
                        }
                    }}
                >
                    Delete
                </button>)}
        </div>
    );
}