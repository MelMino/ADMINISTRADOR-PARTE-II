import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm.component';
import ProductList from '../components/ProductList';
import axios from 'axios';

const ProductPage = () => {
    const [products, setProducts] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data);
                setIsLoaded(true);
            })
            .catch(err => {
                setError(err.message);
                setIsLoaded(true);
            });
    }, []);

    if (!isLoaded) {
        return <p>Cargando productos...</p>;
    }

    if (error) {
        return <p>Error al cargar productos: {error}</p>;
    }

    return (
        <div>
            <ProductForm />
            <hr />
            {products && <ProductList products={products} />}
        </div>
    );
}

export default ProductPage;

