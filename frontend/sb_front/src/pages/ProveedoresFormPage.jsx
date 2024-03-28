import { useForm } from 'react-hook-form';
import { getProveedor, updateProveedor, deleteProveedor, createProveedor } from '../api/consultas_api';
import { useNavigate, useParams, Link} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';


export function ProveedoresFromPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate();
    const params = useParams();


    const onSubmit = async (data) => {
        if (params.id) {
            await updateProveedor(params.id, data)
            toast.success('Proveedor Actualizado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        } else {
            await createProveedor(data);
            toast.success('Proveedor Creado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
        }

        navigate("/proveedores");
    };

    useEffect(() => {
        async function loadProveedor() {
            if (params.id) {
                const res = await getProveedor(params.id)
                setValue('nombre_empresa', res.data.nombre_empresa)
                setValue('contacto', res.data.contacto)
            }
        }
        loadProveedor();
        }, [params.id, setValue]);


    return (
        <div className='max-w-xl mx-auto'>

            {/* Botón para volver a la página de proveedores */}
            <Link to="/proveedores" className="block text-center m-4">
                <h1 className="font-bold text-3xl">Proveedores</h1>
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Nombre de Empresa:
                    <input 
                        type="text" 
                        {...register("nombre_empresa", { required: true })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.nombre_empresa && <span>Se requiere ingresar un nombre</span>}
                </label>

                <label>
                    Contacto:
                    <input 
                        type="number" 
                        {...register("contacto", { required: true, min: 0 })}
                        className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    />
                    {errors.contacto && <span>Se requiere ingresar un contacto válido</span>}
                </label>

                <button type="submit" className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>Guardar</button>
            </form>

            {params.id && (
                <button 
                    className='bg-red-500 p-3 rounded-lg w-full mt-3'
                    onClick={async () => {
                        const accepted = window.confirm('Are you sure?');
                        if (accepted) {
                            await deleteProveedor(params.id)
                            toast.success('Proveedor Eliminado', {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                },
                        });
                        navigate("/proveedores");
                    }}}
                >
                    Delete
                </button>)}
        </div>
    );
}
