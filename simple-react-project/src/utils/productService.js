import { products } from '../data/products';

export const getAllProducts = () => products;

export const getProductsByBrand = (brand) =>
  products.filter(product => product.brand === brand);

export const getAvailableProducts = () =>
  products.filter(product => product.available);
