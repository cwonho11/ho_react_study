import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        let keyword = query.get("q") || "";

        let url = `https://my-json-server.typicode.com/cwonho11/ho_react_study/products?q=${keyword}`;
        let response = await fetch(url);
        let data = await response.json();

        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, [query]);

  return (
    <div>
        <Container>
            <Row>
              {productList.map((menu) => (
                <Col lg={3}>
                  <ProductCard item={menu} />
                </Col>
              ))}            
            </Row>
        </Container>        
    </div>
  )
}

export default ProductAll;
