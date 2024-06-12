import React, { useState, useEffect } from 'react';
import { datos } from '../api/GetProveedor';
import { useNavigate } from 'react-router-dom';

const TablaProveedor = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [proveedores, setProveedores] = useState([]); // Usar estado para manejar proveedores
    const navigate = useNavigate();

    useEffect(() => {
        // Cargar los datos de proveedores al montar el componente
        setProveedores(datos);
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProveedores = proveedores.filter(proveedor => 
        proveedor.id_proveedor.toString().includes(searchTerm) || 
        proveedor.nom_proveedor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleModify = (proveedor) => {
        navigate(`/proveedores/modificar/${proveedor.id_proveedor}`, { state: proveedor });
    };

    const handleDelete = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este elemento?")) {
            const newProveedores = proveedores.filter(proveedor => proveedor.id_proveedor !== id);
            setProveedores(newProveedores); // Actualizar el estado con los proveedores filtrados
            alert(`Proveedor con id ${id} eliminado.`);
        }
    };

    return (
        <div>
            <div class="w3-left-align"><h1>Proveedores</h1></div>
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
                <button className="w3-button w3-blue w3-block w3-hover-light-blue" onClick={() => navigate('/proveedores/nuevo')}>Agregar Nuevo</button>
            </div>
            <br></br>
            <table className="w3-table w3-striped w3-bordered w3-hoverable w3-blue w3-text-black">
                <thead>
                    <tr>
                        <th>Id proveedor</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Direccion</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProveedores.map(proveedor => (
                        <tr key={proveedor.id_proveedor}>
                            <td>{proveedor.id_proveedor}</td>
                            <td>{proveedor.nom_proveedor}</td>
                            <td>{proveedor.telefono}</td>
                            <td>{proveedor.direccion}</td>
                            <td>{proveedor.email}</td>
                            <td>
                                <button className="w3-button w3-hover-green" onClick={() => handleModify(proveedor)}>Modificar</button>
                                <button className="w3-button w3-hover-red" onClick={() => handleDelete(proveedor.id_proveedor)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaProveedor;
