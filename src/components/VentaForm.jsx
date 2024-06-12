import React, { useState } from 'react';
import { datos as ventasDatos } from '../api/GetVenta'; // Asegúrate de tener un archivo GetVenta.js que exporte los datos
import { useNavigate } from 'react-router-dom';

const VentaForm = () => {
    const [venta, setVenta] = useState({
        id_venta: '',
        fecha_venta: '',
        id_producto: '',
        cantidad: '',
        precio_unitario: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVenta({ ...venta, [name]: value });
    };

    const generateUniqueID = () => {
        let newID;
        do {
            newID = Math.floor(Math.random() * 1000); // Generar un ID aleatorio entre 0 y 999
        } while (ventasDatos.some(venta => venta.id_venta === newID));
        return newID;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newVenta = { ...venta, id_venta: generateUniqueID() };
        ventasDatos.push(newVenta); // Agregar la nueva venta a la lista de datos
        alert('Venta agregada con éxito');
        navigate('/ventas');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="w3-left-align"><h1>Nueva venta</h1></div>
            <br></br>
            <input className='w3-input' name="fecha_venta" type="date" value={venta.fecha_venta} onChange={handleChange} placeholder="Fecha de Venta" required /><br></br>
            <input className='w3-input' name="id_producto" type="number" value={venta.id_producto} onChange={handleChange} placeholder="ID del Producto" required /><br></br>
            <input className='w3-input' name="cantidad" type="number" value={venta.cantidad} onChange={handleChange} placeholder="Cantidad" required /><br></br>
            <input className='w3-input' name="precio_unitario" type="number" step="0.01" value={venta.precio_unitario} onChange={handleChange} placeholder="Precio Unitario" required /><br></br>
            <button className='w3-button w3-blue w3-block w3-hover-light-blue' type="submit">Agregar Venta</button>
        </form>
    );
};

export default VentaForm;