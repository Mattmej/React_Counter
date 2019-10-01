import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'


const numberArea = (props) => {
    return (
        // <Col sm="1" className={props.numberAreaClass}>{props.number}</Col>
        // <Container className={props.numberAreaClass}>{props.number}</Container>
        <div className={props.numberAreaClass}>{props.number}</div> 
    )
};

export default numberArea;