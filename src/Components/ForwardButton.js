import React from 'react';
import Button from 'react-bootstrap/Button';


const forwardButton = (props) => {
    return (
        <Button variant="success" size='lg' className={props.buttonClass} onClick={props.click}>
            {props.upSymbol}
        </Button>


    )
};

export default forwardButton;