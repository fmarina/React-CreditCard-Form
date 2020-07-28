import React from 'react';
import './Input.css';

const Input = ({type, name, id, handleChange, value, handleBlur, handleFocus}) => {
    return (
        <input
            type={type} 
            name={name}
            id={id}
            onChange={handleChange}
            value={value}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoComplete="off"
        />
    );
}

export default Input;