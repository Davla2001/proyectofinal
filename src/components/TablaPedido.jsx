import React, { useState, useEffect } from 'react';
import { datos as pedidosDatos } from '../api/GetPedido';
import { useNavigate } from 'react-router-dom';

const TablaPedido = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [pedidos, setPedidos] = useState([]); // Usar estado para manejar pedidos
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos de pedidos al montar el componente
        setPedidos(pedidosDatos);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPedidos = pedidos.filter(pedido =>
        pedido.id_pedido.toString().includes(searchTerm) ||
        pedido.id_producto.toString().includes(searchTerm) ||
        pedido.id_proveedor.toString().includes(searchTerm)
    );

    const handleModify = (pedido) => {
        navigate(`/pedidos/modificar/${pedido.id_pedido}`, { state: pedido });
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este pedido?")) {
            const newPedidos = pedidos.filter(pedido => pedido.id_pedido !== id);
            setPedidos(newPedidos); // Actualizar el estado con los pedidos filtrados
            alert(`Pedido con id ${id} eliminado.`);
        }
    };

    return (
        <div>
            <div class="w3-left-align"><h1>Pedidos</h1></div>
            <br></br>
            <div className="w3-container">
                <input
                    className='w3-input'
                    type="text"
                    placeholder="Buscar por ID de pedido, producto o proveedor..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <br></br>
                <button className="w3-button w3-blue w3-block w3-hover-light-blue" onClick={() => navigate('/pedidos/nuevo')}>Agregar Nuevo</button>
            </div>
            <br></br>
            <table className="w3-table w3-striped w3-bordered w3-hoverable w3-blue w3-text-black">
                <thead>
                    <tr>
                        <th>Id Pedido</th>
                        <th>Fecha Pedido</th>
                        <th>Id Producto</th>
                        <th>Id Proveedor</th>
                        <th>Cantidad Solicitada</th>
                        <th>Estado</th>
                        <th>Fecha Surtido</th>
                        <th>Costo Pedido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPedidos.map(pedido => (
                        <tr key={pedido.id_pedido}>
                            <td>{pedido.id_pedido}</td>
                            <td>{pedido.fecha_pedido}</td>
                            <td>{pedido.id_producto}</td>
                            <td>{pedido.id_proveedor}</td>
                            <td>{pedido.cantidad_solicitada}</td>
                            <td>{pedido.estado}</td>
                            <td>{pedido.fecha_surtido}</td>
                            <td>{pedido.costo_pedido}</td>
                            <td>
                                <button className="w3-button w3-hover-green" onClick={() => handleModify(pedido)}>Modificar</button>
                                <button className="w3-button w3-hover-red" onClick={() => handleDelete(pedido.id_pedido)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaPedido;
