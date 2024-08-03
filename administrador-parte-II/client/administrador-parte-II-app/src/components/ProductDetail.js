import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const params = useParams();
    const productId = params.id;

    useEffect(() => {
        getProductData();
    }, []);

    const getProductData = async () => {
        try {
            const result = await axios.get(`http://localhost:8000/api/products/${productId}`);
            setName(result.data.name);
            setPrice(result.data.price);
            setDescription(result.data.description);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Precio: {price}</p>
            <p>Descripción: {description}</p>
        </div>
    );
}

export default ProductDetail;