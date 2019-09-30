import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const backButton = (props) => {
    return (
        <Button 
            variant="primary" 
            size='lg' 
            className={props.buttonClass}
            onClick={props.click}
        >
            {props.downSymbol}
        </Button>
    )
};

export default backButton;