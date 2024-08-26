import React, { useState } from 'react';
import { Col, Row, Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const contactList = useSelector(state => state.contactList);
    const searchName = (event) => {
        event.preventDefault();

        dispatch({ type: "SEARCH_CONTACT", payload: { name } });
    }

  return (
    <Container className='mt-4'>
    <Form onSubmit={searchName} className='search-form'>
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력해주세요" 
                              onChange={(event) => setName(event.target.value)} />
            </Col>
            <Col lg={2}>
                <Button variant='warning' className="text-light" type="submit">찾기</Button>
            </Col>
        </Row>
    </Form>
    </Container>
  )
}

export default SearchBox;