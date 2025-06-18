import ProductCard from './components/ProductCard';

function App() {
  const fakeProduct = {
    id: 1,
    name: 'Lampada da Tavolo LED',
    description: 'Una lampada elegante e moderna, perfetta per il tuo ufficio o comodino.',
    price: 39.99,
    image: './assets/lampada.webp'
  };

  return (
    <div className="app">
      <h1>Il prodotto del mese</h1>
      <ProductCard product={fakeProduct} />
    </div>
  );
}

export default App;