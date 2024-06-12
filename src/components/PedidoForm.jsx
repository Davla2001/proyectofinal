import React, { useState } from 'react';
import { datos as pedidosDatos } from '../api/GetPedido'; // Asegúrate de tener un archivo GetPedido.js que exporte los datos
import { useNavigate } from 'react-router-dom';

const PedidoForm = () => {
    const [newPedido, setNewPedido] = useState({
        id_pedido: '',
        fecha_pedido: '',
        id_producto: '',
        id_proveedor: '',
        cantidad_solicitada: '',
        estado: '',
        fecha_surtido: '',
        costo_pedido: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPedido({ ...newPedido, [name]: value });
    };

    const generateUniqueID = () => {
        let newID;
        do {
            newID = Math.floor(Math.random() * 1000); // Generar un ID aleatorio entre 0 y 999
        } while (pedidosDatos.some(pedido => pedido.id_pedido === newID));
        return newID;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newID = generateUniqueID();
        const pedidoConID = { ...newPedido, id_pedido: newID };
        pedidosDatos.push(pedidoConID);
        alert('Pedido agregado con éxito');
        navigate('/pedidos');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="w3-left-align"><h1>Nuevo pedido</h1></div>
            <br></br>
            <input
                className='w3-input'
                name="fecha_pedido"
                value={newPedido.fecha_pedido}
                onChange={handleChange}
                placeholder="Fecha del pedido"
                required
            /><br></br>
            <input
                className='w3-input'
                name="id_producto"
                type='number'
                value={newPedido.id_producto}
                onChange={handleChange}
                placeholder="ID del producto"
                required
            /><br></br>
            <input
                className='w3-input'
                name="id_proveedor"
                type='number'
                value={newPedido.id_proveedor}
                onChange={handleChange}
                placeholder="ID del proveedor"
                required
            /><br></br>
            <input
                className='w3-input'
                name="cantidad_solicitada"
                type='number'
                value={newPedido.cantidad_solicitada}
                onChange={handleChange}
                placeholder="Cantidad solicitada"
                required
            /><br></br>
            <input
                className='w3-input'
                name="estado"
                value={newPedido.estado}
                onChange={handleChange}
                placeholder="Estado"
                required
            /><br></br>
            <input
                className='w3-input'
                name="fecha_surtido"
                value={newPedido.fecha_surtido}
                onChange={handleChange}
                placeholder="Fecha de surtido"
                required
            /><br></br>
            <input
                className='w3-input'
                name="costo_pedido"
                type='number'
                value={newPedido.costo_pedido}
                onChange={handleChange}
                placeholder="Costo del pedido"
                required
            /><br></br>
            <button className='w3-button w3-blue w3-block w3-hover-light-blue' type="submit">Agregar Pedido</button>
        </form>
    );
};

export default PedidoForm;
