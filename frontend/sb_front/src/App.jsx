import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProductosPage } from './pages/ProductosPage';
import { ProductosFormPage } from './pages/ProductosFormPage';
import { Toaster } from "react-hot-toast"
import { Inicio } from './pages/Inicio';
import { ProveedoresFromPage } from './pages/ProveedoresFormPage';
import { ProveedoresPage } from './pages/ProveedoresPage';
import { ClientesFormPage } from './pages/ClientesFormPage';
import { ClientesPage } from './pages/ClientesPage';
import { VentasPage } from './pages/VentasPage';
import { VentasFormPage } from './pages/VentasFormPage';
import { Login } from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio"/>} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/login' element={<Login />} />
          <Route path='/productos' element={<ProductosPage />} />
          <Route path='/productos-create' element={<ProductosFormPage />} />
          <Route path='/productos/:id' element={<ProductosFormPage />} />
          <Route path='/proveedores' element={<ProveedoresPage />} />
          <Route path='/proveedores-create' element={<ProveedoresFromPage />} />
          <Route path='/proveedores/:id' element={<ProveedoresFromPage />} />
          <Route path='/clientes' element={<ClientesPage />} />
          <Route path='/clientes-create' element={<ClientesFormPage />} />
          <Route path='/clientes/:id' element={<ClientesFormPage />} />
          <Route path='/ventas' element={<VentasPage />} />
          <Route path='/ventas-create' element={<VentasFormPage />} />
          <Route path='/ventas/:id' element={<VentasFormPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}


export default App;