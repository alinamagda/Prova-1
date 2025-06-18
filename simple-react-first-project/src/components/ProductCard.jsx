import './ProductCard.css';


function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price.toFixed(2)} €</p>
      <button className="buy-button">Aggiungi al carrello</button>
    </div>
  );
}

export default ProductCard;
