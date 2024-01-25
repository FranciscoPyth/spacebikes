import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ProductosPage } from './pages/ProductosPage';
import { ProductosFormPage } from './pages/ProductosFormPage';
import { Toaster } from "react-hot-toast"
import { Inicio } from './pages/Inicio';


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio"/>} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/productos' element={<ProductosPage />} />
          <Route path='/productos-create' element={<ProductosFormPage />} />
          <Route path='/productos/:id' element={<ProductosFormPage />} />
        </Routes>
        <Toaster/>
      </div>
    </BrowserRouter>
  )
}


export default App;