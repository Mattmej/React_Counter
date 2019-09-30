import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const forwardButton = (props) => {
    return (
        // <div className='p-2 bg-info'>{props.text}</div>
        // <Container>
        //     <Row className={props.rowClass}>
        //         <Col className={props.colClass}>{props.text}</Col>
        //     </Row>
        // </Container>

        <Button variant="success" size='lg' className={props.buttonClass}>{props.upSymbol}</Button>

    )
};

export default forwardButton;