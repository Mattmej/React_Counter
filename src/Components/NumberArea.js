import React from 'react';


const numberArea = (props) => {
    return (
        <div className={props.numberAreaClass}>{props.number}</div> 
    )
};

export default numberArea;