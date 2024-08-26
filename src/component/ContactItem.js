import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <Container className='border border-warning p-3'>
    <Row>
        <Col lg={2}>
                <img width={50} 
                    src="https://thumbs.dreamstime.com/b/unknown-person-icon-question-mark-anonymous-avatar-human-silhouette-flat-design-vector-illustration-stock-image-eps-240579069.jpg" alt="프로필 이미지" />
            </Col>
            <Col lg={10}>
                <div>{item.name}</div>
                <div>{item.phoneNumber}</div> 
            </Col>
    </Row>
    </Container>
  )
}

export default ContactItem;