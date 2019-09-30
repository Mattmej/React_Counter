import React from 'react';
import Col from 'react-bootstrap/Col';

const numberArea = (props) => {
    return (
        <Col sm="1" className='numberArea'>{props.number}</Col>
    )
};

export default numberArea;