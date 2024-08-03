import React, { useState } from 'react';
import ProductPage from './views/ProductPage';
import ProductDetail from './components/ProductDetail';

const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Función para manejar la selección de un producto
  const handleProductSelect = (id) => {
    setSelectedProductId(id);
  };

  // Función para volver a la vista de lista de productos
  const handleBackToList = () => {
    setSelectedProductId(null);
  };

  return (
    <div className="App">
      {selectedProductId === null ? (
        <ProductPage onProductSelect={handleProductSelect} />
      ) : (
        <ProductDetail
          productId={selectedProductId}
          onBackToList={handleBackToList}
        />
      )}
    </div>
  );
}

export default App;
