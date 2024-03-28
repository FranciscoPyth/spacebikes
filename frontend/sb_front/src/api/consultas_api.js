import axios from 'axios'


const productApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/productos/'
});

const proveedorApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/proveedores/'
});

const clienteApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/clientes/'
});

const ventasApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/ventas/'
});

const detalle_ventasApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/detalle_ventas/'
});


export const getAllProductos = () => productApi.get("/");
export const getProducto = (id) => productApi.get(`/${id}/`);
export const createProducto = (producto) => productApi.post("/", producto);
export const deleteProducto = (id) => productApi.delete(`/${id}/`);
export const updateProducto = (id, producto) => productApi.put(`/${id}/`, producto);

export const getAllProveedores = () => proveedorApi.get("/");
export const getProveedor = (id) => proveedorApi.get(`/${id}/`);
export const createProveedor = (proveedor) => proveedorApi.post("/", proveedor);
export const deleteProveedor = (id) => proveedorApi.delete(`/${id}/`);
export const updateProveedor = (id, proveedor) => proveedorApi.put(`/${id}/`, proveedor);

export const getAllClientes = () => clienteApi.get("/");
export const getCliente = (id) => clienteApi.get(`/${id}/`);
export const createCliente = (cliente) => clienteApi.post("/", cliente);
export const deleteCliente = (id) => clienteApi.delete(`/${id}/`);
export const updateCliente = (id, cliente) => clienteApi.put(`/${id}/`, cliente);

export const getAllVentas = () => ventasApi.get("/");
export const getVenta = (id) => ventasApi.get(`/${id}/`);
export const createVenta = (venta) => ventasApi.post("/", venta);
export const deleteVenta = (id) => ventasApi.delete(`/${id}/`);
export const updateVenta = (id, venta) => ventasApi.put(`/${id}/`, venta);

export const getAllDetalleVenta = () => detalle_ventasApi.get("/");
export const getDetalleVenta = (id) => detalle_ventasApi.get(`/${id}/`);
export const createDetalleVenta = (detalle) => detalle_ventasApi.post("/", detalle);
export const deleteDetalleVenta = (id) => detalle_ventasApi.delete(`/${id}/`);
export const updateDetalleVenta = (id, detalle) => detalle_ventasApi.put(`/${id}/`, detalle);
