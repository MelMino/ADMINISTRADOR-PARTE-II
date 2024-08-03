import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
        return (<div>
            <div>
                <h2 className="text-center">All Products</h2>
            </div>
            <div>
                {props.products.map((product, index) => 
                    <li key={product._id}>
                    <Link to={`/${product._id}`}>{product.name}</Link>
                </li>)}
            </div>
        </div>)
}

export default ProductList;