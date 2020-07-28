import React, {useState} from 'react';
import './Form.css';
import cardChip from '../../assets/images/chip-card.png';
import { useFormik } from 'formik';
import validate from './Validate';
import Flip from 'react-reveal/Flip';

const Form = () => {

    const [showCreditCard, setShowCreditCard] = useState(false);

    const formik = useFormik({
        initialValues: {
            cardNumber: '**** **** **** ****',
            fullName: '',
            expiryDate: 'MM/YY',
            cvc: '***',
            dni: ''  
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <div className="form-container">

            <div className="credit-card-content">
            { (showCreditCard)
            ?
                (   <Flip left>
                    <div className="credit-card-back">
                        <div className="line-magnet"></div>
                        <div className="data-cvc">
                            <div className="cvc-number">{formik.values.cvc}</div>
                        </div>
                    </div>
                    </Flip>
                )   
            :
                (   <div className="credit-card">
                        <div className="chip-container"> 
                            <img src={cardChip} alt="card chip" />
                        </div>
                        <div className="number-card">{formik.values.cardNumber}
                        </div>
                        <div className="card-data-container">
                            <div className="fullName-card">{formik.values.fullName}</div>
                            <div className="expiry-date-card">{formik.values.expiryDate}</div>
                        </div>
                    </div>
                )
            }
            </div>

            <div className="form-content">
                
                <form onSubmit={formik.handleSubmit}>

                    <label htmlFor="cardNumber">Número de la tarjeta</label>
                    <input 
                        type="number"
                        name="cardNumber" 
                        id="cardNumber"
                        onChange={formik.handleChange}
                        value={formik.values.cardNumber}
                        onBlur={formik.handleBlur}
                    />
                    {   (formik.touched.cardNumber && formik.errors.cardNumber)
                        ? <div className="formik-errors">{formik.errors.cardNumber}</div>
                        : null
                    }

                    <label htmlFor="fullName">Nombre y Apellido</label>
                    <input 
                        type="text"
                        name="fullName" 
                        id="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                        onBlur={formik.handleBlur}
                    />                    
                    {   (formik.touched.fullName && formik.errors.fullName)
                        ? <div className="formik-errors">{formik.errors.fullName}</div>
                        : null
                    }

                    <label htmlFor="expiryDate">Fecha de expiración</label>
                    <input 
                        type="number"
                        name="expiryDate" 
                        id="expiryDate"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <label htmlFor="cvc">Código de seguridad</label>
                    <input 
                        type="number"
                        name="cvc" 
                        id="cvc"
                        onChange={formik.handleChange}
                        onBlur={() => setShowCreditCard(false)}
                        onFocus={() => setShowCreditCard(true)}
                        value={formik.values.cvc}
                    />
                    {   (formik.touched.cvc && formik.errors.cvc)
                        ? <div className="formik-errors">{formik.errors.cvc}</div>
                        : null
                    }

                    <label htmlFor="dni">DNI del titular de la tarjeta</label>
                    <input 
                        type="number"
                        name="dni" 
                        id="dni"
                    />
                    {   (formik.touched.dni && formik.errors.dni)
                        ? <div className="formik-errors">{formik.errors.dni}</div>
                        : null
                    }

                    <button type="submit">Continuar</button>
                </form>
            </div>

        </div>
    );

}

export default Form;