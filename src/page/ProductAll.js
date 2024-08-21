import React, { useEffect, useState } from 'react';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = `https://my-json-server.typicode.com/cwonho11/ho_react_study/products`;
        let response = await fetch(url);
        let data = await response.json();

        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <div>
        <ProductCard />
    </div>
  )
}

export default ProductAll;
