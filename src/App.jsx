import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductoForm from './components/ProductoForm';
import ModificarProductoForm from './components/ModificarProductoForm';
import ProveedorForm from './components/ProveedorForm';
import ModificarProveedorForm from './components/ModificarProveedorForm';
import PedidoForm from './components/PedidoForm';
import ModificarPedidoForm from './components/ModificarPedidoForm';
import VentaForm from './components/VentaForm';
import TablaProducto from './components/TablaProducto';
import TablaProveedor from './components/TablaProveedor';
import TablaPedido from './components/TablaPedido';
import TablaVenta from './components/TablaVenta';

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<TablaProducto />} />
        <Route path="/productos/nuevo" element={<ProductoForm />} />
        <Route path="/productos/modificar/:id" element={<ModificarProductoForm />} />
        <Route path="/proveedores" element={<TablaProveedor />} />
        <Route path="/proveedores/nuevo" element={<ProveedorForm />} />
        <Route path="/proveedores/modificar/:id" element={<ModificarProveedorForm />} />
        <Route path="/pedidos" element={<TablaPedido />} />
        <Route path="/pedidos/nuevo" element={<PedidoForm />} />
        <Route path="/pedidos/modificar/:id" element={<ModificarPedidoForm />} />
        <Route path="/ventas" element={<TablaVenta />} />
        <Route path="/ventas/nuevo" element={<VentaForm />} />
      </Routes>
    </div>
  );
};

export default App;
