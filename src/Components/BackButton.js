import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const backButton = (props) => {
    return (
        // <div>
 <Button 
            variant="primary" 
            size='lg' 
            className={props.buttonClass}
            onClick={props.click}
        >
            {props.downSymbol}
        </Button>
        // </div>
       
    )
};

export default backButton;