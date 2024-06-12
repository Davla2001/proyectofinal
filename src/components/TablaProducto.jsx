import React, { useState } from 'react';
import { datos } from '../api/GetProducto';
import { useNavigate } from 'react-router-dom';

const TablaProducto = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [productos, setProductos] = useState(datos); // Usar estado para manejar productos
    const navigate = useNavigate();

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = productos.filter(product => 
        product.id_producto.toString().includes(searchTerm) || 
        product.nom_producto.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleModify = (product) => {
        navigate(`/productos/modificar/${product.id_producto}`, { state: product });
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
            const newProducts = productos.filter(product => product.id_producto !== id);
            setProductos(newProducts); // Actualizar el estado con los productos filtrados
            alert(`Producto con id ${id} eliminado.`);
        }
    };

    return (
        <div>
            <div class="w3-left-align"><h1>Productos</h1></div>
            <br></br>
            <div className="w3-container">
                <input 
                    className='w3-input'
                    type="text" 
                    placeholder="Buscar por nombre o ID..." 
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <br></br>
                <button className="w3-button w3-blue w3-block w3-hover-light-blue" onClick={() => navigate('/productos/nuevo')}>Agregar Nuevo</button>
            </div>
            <br></br>
            <table className="w3-table w3-striped w3-bordered w3-hoverable w3-blue w3-text-black">
                <thead>
                    <tr>
                        <th>id producto</th>
                        <th>nombre</th>
                        <th>marca</th>
                        <th>categoria</th>
                        <th>stock</th>
                        <th>precio de compra</th>
                        <th>precio de venta</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.map(product => (
                        <tr key={product.id_producto}>
                            <td>{product.id_producto}</td>
                            <td>{product.nom_producto}</td>
                            <td>{product.marca}</td>
                            <td>{product.categoria}</td>
                            <td>{product.stock}</td>
                            <td>{product.precio_compra}</td>
                            <td>{product.precio_venta}</td>
                            <td>
                                <button className="w3-button w3-hover-green" onClick={() => handleModify(product)}>Modificar</button>
                                <button className="w3-button w3-hover-red" onClick={() => handleDelete(product.id_producto)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaProducto;
