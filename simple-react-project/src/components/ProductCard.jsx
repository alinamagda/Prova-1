import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, width: 250 }}>
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>Marca: {product.brand}</p>
      <p>Prezzo: €{product.price}</p>
      <p style={{ color: product.available ? 'green' : 'red' }}>
        {product.available ? 'Disponibile' : 'Non disponibile'}
      </p>
    </div>
  );
};

export default ProductCard;
