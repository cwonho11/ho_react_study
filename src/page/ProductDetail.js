import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/cwonho11/ho_react_study/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    
    setProduct(data);
}

useEffect(() => {
  getProductDetail();
}, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt={product?.title} />
        </Col>
        <Col className='product-info'>
          <div>{product?.title}</div>
          <div>￦{product?.price}</div>
          <div>{product?.choice === true ? "Conscious choice" : ""}</div>
          <div>{product?.new === true ? "신제품" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu className='product-item-list'>
              {product?.size.map((item) => {
                  return (<Dropdown.Item value={item}>{item}</Dropdown.Item>);
              })}              
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail;