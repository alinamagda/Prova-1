import React, { useState } from 'react';
/* import ProductCard from './components/ProductCard';
import {
  getAllProducts,
  getProductsByBrand,
  getAvailableProducts
} from './utils/productService'; */

import TagList from '../src/components/TagList';

/* function App() {
  const [products, setProducts] = useState(getAllProducts());

  return (
    <div style={{ padding: 20 }}>
      <h1>Catalogo Prodotti</h1>

      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setProducts(getAllProducts())}>Tutti</button>
        <button onClick={() => setProducts(getProductsByBrand('LightCo'))}>Solo LightCo</button>
        <button onClick={() => setProducts(getAvailableProducts())}>Solo Disponibili</button>
      </div>

      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
 */

function App() {
  const tags = ['React', 'JavaScript', 'Frontend', 'Web Dev', 'CSS', 'HTML'];

  return (
    <div>
      <h1>Lista Tags</h1>
      <TagList tags={tags} maxTags={3} />
    </div>
  );
}

export default App;