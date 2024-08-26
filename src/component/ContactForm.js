import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const dispatch = useDispatch();

    const addContact = (event) => {
        event.preventDefault();

        dispatch({type: "ADD_CONTACT", payload: { name, phoneNumber }});

        // input 영역 비워주기
        setName("");
        setPhoneNumber("");
    }

    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const phoneNumberHandler = (event) => {
        setPhoneNumber(event.target.value);
    }

  return (
    <div>
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요" onChange={nameHandler} value={name} />                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="전화번호를 입력해주세요" onChange={phoneNumberHandler} value={phoneNumber} />
            </Form.Group>
            
            <Button variant="warning" className="text-light" type="submit">추가</Button>
        </Form>
    </div>
    
  )
}

export default ContactForm;