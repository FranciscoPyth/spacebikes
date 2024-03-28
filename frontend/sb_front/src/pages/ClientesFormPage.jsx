import { useForm } from 'react-hook-form';
import { getCliente, updateCliente, deleteCliente, createCliente } from '../api/consultas_api';
import { useNavigate, useParams, Link} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';


export function ClientesFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = async (data) => {
        if (params.id) {
            await updateCliente(params.id, data)
            toast.success('Cliente Actualizado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {
            await createCliente(data);
            toast.success('Cliente Creado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }

        navigate("/clientes");
    };

    useEffect(() => {
        async function loadCliente() {
            if (params.id) {
                const res = await getCliente(params.id)
                setValue('nombre', res.data.nombre)
                setValue('direccion', res.data.direccion)
            }
        }
        loadCliente();
        }, [params.id, setValue]);


    return (
        <div className='max-w-xl mx-auto' style={{ padding: "20px" }}>

            {/* Botón para volver a la página de proveedores */}
            <Link to="/clientes" className="block text-center m-4">
                <h1 className="font-bold text-3xl">Clientes</h1>
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
                    Apellido:
                    <input 
                        type="text" 
                        {...register("apellido", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.apellido && <span>Se requiere ingresar un apellido</span>}
                </label>

                <label>
                    Direccion:
                    <input 
                        type="text" 
                        {...register("direccion", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.direccion && <span>Se requiere ingresar un contacto válido</span>}
                </label>

                <label>
                    Telefono:
                    <input 
                        type="num" 
                        {...register("telefono", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.telefono && <span>Se requiere ingresar un telefono válido</span>}
                </label>

                <button type="submit" className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {params.id && (
                <button 
                    className='bg-red-500 p-3 rounded-lg w-full mt-3'
                    onClick={async () => {
                        const accepted = window.confirm('Are you sure?');
                        if (accepted) {
                            await deleteCliente(params.id)
                            toast.success('Cliente Eliminado', {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                },
                        });
                        navigate("/clientes");
                    }}}
                >
                    Delete
                </button>)}
        </div>
    );
}
