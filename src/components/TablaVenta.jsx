import React, { useState, useEffect } from 'react';
import { datos as ventasDatos } from '../api/GetVenta'; // Asegúrate de tener un archivo GetVenta.js que exporte los datos
import { useNavigate } from 'react-router-dom';

const TablaVenta = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [ventas, setVentas] = useState([]); // Usar estado para manejar ventas
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos de ventas al montar el componente
        setVentas(ventasDatos);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredVentas = ventas.filter(venta => 
        venta.id_venta.toString().includes(searchTerm) || 
        venta.fecha_venta.toLowerCase().includes(searchTerm.toLowerCase()) ||
        venta.id_producto.toString().includes(searchTerm)
    );


    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
            const newVentas = ventas.filter(venta => venta.id_venta !== id);
            setVentas(newVentas); // Actualizar el estado con las ventas filtradas
            alert(`Venta con id ${id} eliminada.`);
        }
    };

    return (
        <div>
            <div class="w3-left-align"><h1>Ventas</h1></div>
            <br></br>
            <div className="w3-container">
                <input 
                    className='w3-input'
                    type="text" 
                    placeholder="Buscar por ID de venta, fecha o ID de producto..." 
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <br></br>
                <button className="w3-button w3-blue w3-block w3-hover-light-blue" onClick={() => navigate('/ventas/nuevo')}>Agregar Nueva Venta</button>
            </div>
            <br></br>
            <table className="w3-table w3-striped w3-bordered w3-hoverable w3-blue w3-text-black">
                <thead>
                    <tr>
                        <th>ID Venta</th>
                        <th>Fecha de Venta</th>
                        <th>ID Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredVentas.map(venta => (
                        <tr key={venta.id_venta}>
                            <td>{venta.id_venta}</td>
                            <td>{venta.fecha_venta}</td>
                            <td>{venta.id_producto}</td>
                            <td>{venta.cantidad}</td>
                            <td>{venta.precio_unitario}</td>
                            <td>
                                <button className="w3-button w3-hover-red" onClick={() => handleDelete(venta.id_venta)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaVenta;
