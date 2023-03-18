import React, { useEffect } from 'react';
import './Style.css';
import Product from '../Product';
const ListProducts = () => {
  const [products, setProducts] = useState([])

  useEffect (() => {
    fetchData()
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    setProducts(data);

  };
  return <div>
      {products.map((el, index) => <Product key="index" />)} 
      </div>;
  
}

export default ListProducts;