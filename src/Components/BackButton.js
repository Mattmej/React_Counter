import React from 'react';
import Button from 'react-bootstrap/Button';

const backButton = (props) => {
    return (
        <Button variant="primary" size='lg' className={props.buttonClass} onClick={props.click}>
            {props.downSymbol}
        </Button>
       
    )
};

export default backButton;