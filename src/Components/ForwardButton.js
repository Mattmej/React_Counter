import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const forwardButton = (props) => {
    return (
        // <div className='p-2 bg-info'>{props.text}</div>
        <Container>
            <Row className={props.classes}>
                <Col>{props.text}</Col>
            </Row>
        </Container>
    )
};

export default forwardButton;