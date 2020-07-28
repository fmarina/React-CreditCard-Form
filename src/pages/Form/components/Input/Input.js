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

                    {/* <input 
                        type="number"
                        name="cvc" 
                        id="cvc"
                        onChange={formik.handleChange}
                        onBlur={(e) => (
                            setShowCreditCard(false),
                            formik.handleBlur(e)
                        )}
                        onFocus={() => setShowCreditCard(true)}
                        value={formik.values.cvc}
                    /> */}