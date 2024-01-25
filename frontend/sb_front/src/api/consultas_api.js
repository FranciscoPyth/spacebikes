import axios from 'axios'


const productApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/productos/'
});

const proveedorApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/space/api/v1/proveedores/'
});

export const getAllProductos = () => productApi.get("/");
export const getProducto = (id) => productApi.get(`/${id}/`);
export const createProducto = (producto) => productApi.post("/", producto);
export const deleteProducto = (id) => productApi.delete(`/${id}/`);
export const updateProducto = (id, producto) => productApi.put(`/${id}/`, producto);

export const getAllProveedores = () => proveedorApi.get("/");