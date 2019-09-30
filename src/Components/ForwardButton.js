import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const forwardButton = (props) => {
    return (

        <Button variant="success" size='lg' className={props.buttonClass} onClick={props.click}>
            {props.upSymbol}
        </Button>

    )
};

export default forwardButton;