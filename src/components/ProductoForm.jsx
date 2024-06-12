import React, { useState } from 'react';
import { datos } from '../api/GetProducto';
import { useNavigate } from 'react-router-dom';

const ProductoForm = () => {
    const [newProduct, setNewProduct] = useState({
        id_producto: '',
        nom_producto: '',
        marca: '',
        categoria: '',
        stock: '',
        precio_compra: '',
        precio_venta: ''
    });

    const navigate = useNavigate();

    const generateUniqueID = () => {
        let newID;
        do {
            newID = Math.floor(Math.random() * 1000); // Generar un ID aleatorio entre 0 y 999
        } while (datos.some(product => product.id_producto === newID));
        return newID;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProductWithID = { ...newProduct, id_producto: generateUniqueID() };
        datos.push(newProductWithID);
        alert('Producto agregado con éxito');
        navigate('/productos');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="w3-left-align"><h1>Nuevo produto</h1></div>
            <br></br>
            <input className='w3-input' name="nom_producto" value={newProduct.nom_producto} onChange={handleChange} placeholder="Nombre del producto" required /><br></br>
            <input className='w3-input' name="marca" value={newProduct.marca} onChange={handleChange} placeholder="Marca" required /><br></br>
            <input className='w3-input' name="categoria" value={newProduct.categoria} onChange={handleChange} placeholder="Categoría" required /><br></br>
            <input className='w3-input' name="stock" type="number" value={newProduct.stock} onChange={handleChange} placeholder="Stock" required /><br></br>
            <input className='w3-input' name="precio_compra" type="number" value={newProduct.precio_compra} onChange={handleChange} placeholder="Precio de compra" required /><br></br>
            <input className='w3-input' name="precio_venta" type="number" value={newProduct.precio_venta} onChange={handleChange} placeholder="Precio de venta" required /><br></br>
            <button className='w3-button w3-blue w3-block w3-hover-light-blue' type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductoForm;
