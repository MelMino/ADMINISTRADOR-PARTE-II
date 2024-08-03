import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetail from '../components/ProductDetail';

export default (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        // Verifica si props.id está definido antes de realizar la solicitud
        if (props._id) {
            axios.get("http://localhost:8000/api/products/" + props._id)
                .then(res => setProduct({ ...res.data }))
                .catch(err => console.error("Error al obtener detalles del producto:", err));
        }
    }, [props.id]); 

    return (
        <div>
            <ProductDetail product={product} />
        </div>
    );
}