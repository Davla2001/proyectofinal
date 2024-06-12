import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { datos as pedidosDatos } from '../api/GetPedido'; // Asegúrate de tener un archivo GetPedido.js que exporte los datos

const ModificarPedidoForm = () => {
    const location = useLocation();
    const pedido = location.state;

    const [updatedPedido, setUpdatedPedido] = useState({ ...pedido }); // Usar una copia del pedido para evitar modificar el estado directamente

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPedido({ ...updatedPedido, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = pedidosDatos.findIndex(p => p.id_pedido === pedido.id_pedido);
        pedidosDatos[index] = updatedPedido; // Modificar el pedido en la lista de datos
        alert('Pedido modificado con éxito');
        navigate('/pedidos');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="w3-left-align"><h1>Modificar Pedido</h1></div>
            <br></br>
            <input
                className='w3-input'
                name="fecha_pedido"
                value={updatedPedido.fecha_pedido}
                onChange={handleChange}
                placeholder="Fecha del pedido"
                required
            /><br></br>
            <input
                className='w3-input'
                name="id_producto"
                type='number'
                value={updatedPedido.id_producto}
                onChange={handleChange}
                placeholder="ID del producto"
                required
            /><br></br>
            <input
                className='w3-input'
                name="id_proveedor"
                type='number'
                value={updatedPedido.id_proveedor}
                onChange={handleChange}
                placeholder="ID del proveedor"
                required
            /><br></br>
            <input
                className='w3-input'
                name="cantidad_solicitada"
                type='number'
                value={updatedPedido.cantidad_solicitada}
                onChange={handleChange}
                placeholder="Cantidad solicitada"
                required
            /><br></br>
            <input
                className='w3-input'
                name="estado"
                value={updatedPedido.estado}
                onChange={handleChange}
                placeholder="Estado"
                required
            /><br></br>
            <input
                className='w3-input'
                name="fecha_surtido"
                value={updatedPedido.fecha_surtido}
                onChange={handleChange}
                placeholder="Fecha de surtido"
                required
            /><br></br>
            <input
                className='w3-input'
                name="costo_pedido"
                type='number'
                value={updatedPedido.costo_pedido}
                onChange={handleChange}
                placeholder="Costo del pedido"
                required
            /><br></br>
            <button className='w3-button w3-blue w3-block w3-hover-light-blue' type="submit">Modificar Pedido</button>
        </form>
    );
};

export default ModificarPedidoForm;
