import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const pageHeader = (props) => {
    return (
        <Jumbotron fluid className={props.headerColor}>
            <Container>
                <h1>{props.headerText}</h1>
                <p>{props.headerSubtext}</p>
            </Container>
        </Jumbotron>
    );
};

export default pageHeader;