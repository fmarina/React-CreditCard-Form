import React from 'react';
import './Label.css';

const Label = ({labelfor, text}) => {
    return (
        <label htmlFor={labelfor}>{text}</label>
    );
}

export default Label;