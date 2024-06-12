import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { datos } from '../api/GetProveedor';

const ModificarProveedorForm = () => {
    const location = useLocation();
    const proveedor = location.state;

    const [updatedProveedor, setUpdatedProveedor] = useState({ ...proveedor }); // Usar una copia del proveedor para evitar modificar el estado directamente

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProveedor({ ...updatedProveedor, [name]: value });
    };

    const generateUniqueID = () => {
        let newID;
        do {
            newID = Math.floor(Math.random() * 1000); // Generar un ID aleatorio entre 0 y 999
        } while (datos.some(proveedor => proveedor.id_proveedor === newID));
        return newID;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const index = datos.findIndex(p => p.id_proveedor === proveedor.id_proveedor);
        if (proveedor.id_proveedor !== updatedProveedor.id_proveedor) {
            updatedProveedor.id_proveedor = generateUniqueID();
        }
        datos[index] = updatedProveedor; // Modificar el proveedor en la lista de datos
        alert('Proveedor modificado con éxito');
        navigate('/proveedores');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="w3-left-align"><h1>Modificar Proveedor</h1></div>
            <br></br>
            <input className='w3-input' name="nom_proveedor" value={updatedProveedor.nom_proveedor} onChange={handleChange} placeholder="Nombre del proveedor" required /><br></br>
            <input className='w3-input' name="telefono" type='number' value={updatedProveedor.telefono} onChange={handleChange} placeholder="Telefono" required /><br></br>
            <input className='w3-input' name="direccion" value={updatedProveedor.direccion} onChange={handleChange} placeholder="Direccion" required /><br></br>
            <input className='w3-input' name="email" value={updatedProveedor.email} onChange={handleChange} placeholder="Email" required /><br></br>
            <button className='w3-button w3-blue w3-block w3-hover-light-blue' type="submit">Modificar Proveedor</button>
        </form>
    );
};

export default ModificarProveedorForm;
