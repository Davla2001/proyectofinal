import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { datos } from '../api/GetProducto';

const ModificarProductoForm = () => {
    const location = useLocation();
    const product = location.state;

    const [updatedProduct, setUpdatedProduct] = useState(product);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: value });
    };

    const generateUniqueID = () => {
        let newID;
        do {
            newID = Math.floor(Math.random() * 1000); // Generar un ID aleatorio entre 0 y 999
        } while (datos.some(product => product.id_producto === newID));
        return newID;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = datos.findIndex(p => p.id_producto === product.id_producto);
        if (product.id_producto !== updatedProduct.id_producto) {
            updatedProduct.id_producto = generateUniqueID();
        }
        datos[index] = updatedProduct;
        alert('Producto modificado con éxito');
        navigate('/productos');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="w3-left-align"><h1>Modificar producto</h1></div>
            <br></br>
            <input className='w3-input' name="nom_producto" value={updatedProduct.nom_producto} onChange={handleChange} placeholder="Nombre del producto" required /><br></br>
            <input className='w3-input' name="marca" value={updatedProduct.marca} onChange={handleChange} placeholder="Marca" required /><br></br>
            <input className='w3-input' name="categoria" value={updatedProduct.categoria} onChange={handleChange} placeholder="Categoría" required /><br></br>
            <input className='w3-input' name="stock" type="number" value={updatedProduct.stock} onChange={handleChange} placeholder="Stock" required /><br></br>
            <input className='w3-input' name="precio_compra" type="number" value={updatedProduct.precio_compra} onChange={handleChange} placeholder="Precio de compra" required /><br></br>
            <input className='w3-input' name="precio_venta" type="number" value={updatedProduct.precio_venta} onChange={handleChange} placeholder="Precio de venta" required /><br></br>
            <button className='w3-button w3-blue w3-block w3-hover-light-blue' type="submit">Modificar Producto</button>
        </form>
    );
};

export default ModificarProductoForm;
