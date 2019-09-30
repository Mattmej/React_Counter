import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const backButton = (props) => {
    return (
        // <div className='p-2 bg-info'>{props.text}</div>
        // <Container>
        //     <Row className={props.rowClass}>
        //         <Col className={props.colClass}>{props.text}</Col>
        //     </Row>
        // </Container>
        <Button variant="primary" size='lg' className={props.buttonClass}>{props.downSymbol}</Button>
    )
};

export default backButton;