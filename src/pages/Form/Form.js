import React, {useState} from 'react';
import './Form.css';
import cardChip from '../../assets/images/card-chip.png';
import master from '../../assets/images/master.png';
import visa from '../../assets/images/visa.png';
import amex from '../../assets/images/amex.png';
import { useFormik } from 'formik';
import validate from './Validate';
import Flip from 'react-reveal/Flip';
import Label from './components/Label/Label';
import Input from './components/Input/Input';

const Form = () => {

    const [showCreditCard, setShowCreditCard] = useState(false);

    const formik = useFormik({
        initialValues: {
            cardNumber: '',
            fullName: '',
            month: '',
            year: '',
            cvc: '',
            dni: ''  
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
    });

    const bankValidate = (cardNumber) => {
        if(/^3\d+/.test(cardNumber)) return amex;
        if(/^4\d+/.test(cardNumber)) return visa;
        if(/^5\d+/.test(cardNumber)) return master;
    }

    const formatCardNumber = (cardNumber) => {
        // amex format 4 6 5 digitos
        return (cardNumber.replace(/ /g, '').match(/\b(\d{4})(\d{6})(\d{5})\b/))
        ? cardNumber = cardNumber.replace(/\W/gi, '')
                                 .replace(/\b(\d{4})(\d{6})(\d{5})\b/, '$1 $2 $3')
                                 .trim()
        // visa, master format
        : cardNumber = cardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
    }

    return (
        <div className="form-container">
            <div className="credit-card-content">
            { (showCreditCard)
            ?   (   <Flip left>
                    <div className="credit-card-back">
                        <div className="line-magnet"></div>
                        <div className="data-cvc">
                            <div className="cvc-number">{formik.values.cvc}</div>
                        </div>
                    </div>
                    </Flip>
                )   
            :   (   <div className="credit-card">
                        <div className="chip-container"> 
                            <img src={cardChip} alt="card chip" className="chip-card" />
                        {   (bankValidate(formik.values.cardNumber) !== undefined) &&
                                <img alt="bank logo" className="bank-logo"
                                    src={bankValidate(formik.values.cardNumber)} 
                                />
                        }
                        </div>
                        <div className="number-card">
                            {   (!formik.values.cardNumber)
                                ? "**** **** **** ****"
                                : formatCardNumber(String(formik.values.cardNumber))
                            }
                        </div>
                        <div className="card-data-container">
                            <div className="fullName-card">
                                {   (!formik.values.fullName)
                                    ? "Nombre y Apellido"
                                    : formik.values.fullName
                                }
                            </div>
                            <div className="expiry-date-card">
                                {   (!formik.values.month && !formik.values.year)
                                    ? "MM/YY"
                                    : `${formik.values.month} / ${formik.values.year}`
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            </div>

            <div className="form-content">                
                <form onSubmit={formik.handleSubmit}>

                    <Label labelfor={"cardNumber"} text="Número de la tarjeta"/>
                    <Input type="number" name="cardNumber" id="cardNumber" 
                        handleChange={formik.handleChange} 
                        value={formik.values.cardNumber}
                        handleBlur={formik.handleBlur}
                    />
                    {   (formik.touched.cardNumber && formik.errors.cardNumber)
                        ? <div className="formik-errors">{formik.errors.cardNumber}</div>
                        : null
                    }

                    <Label labelfor={"fullName"} text="Nombre y Apellido"/>
                    <Input type="text" name="fullName" id="fullName"
                        handleChange={formik.handleChange}
                        value={formik.values.fullName}
                        handleBlur={formik.handleBlur}
                    />
                    {   (formik.touched.fullName && formik.errors.fullName)
                        ? <div className="formik-errors">{formik.errors.fullName}</div>
                        : null
                    }

                    <Label labelfor={"month"} text="Fecha de expiración"/>
                    <div className="container-expiryDate">
                        <select
                            id="month" 
                            name="month" 
                            value={formik.values.month}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >   
                            <option value="" label="MM" />
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                            <option>05</option>
                            <option>06</option>
                            <option>07</option>
                            <option>08</option>
                            <option>09</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>

                        <select
                            id="year" 
                            name="year" 
                            value={formik.values.year}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="" label="YY" />
                            <option>2020</option>
                            <option>2021</option>
                            <option>2022</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                            <option>2026</option>
                            <option>2027</option>
                            <option>2028</option>
                            <option>2029</option>
                            <option>2030</option>
                            <option>2031</option>
                            <option>2032</option>
                            <option>2033</option>
                            <option>2034</option>
                            <option>2035</option>
                        </select>                        
                    </div>
                    {   (formik.touched.month && formik.errors.month)
                        ? <div className="formik-errors">{formik.errors.month}</div>
                        : null
                    }

                    <Label labelfor={"cvc"} text="Código de seguridad"/>
                    <Input type="number" name="cvc" id="cvc"
                        handleChange={formik.handleChange}
                        value={formik.values.cvc}
                        handleBlur={(e) => (
                            setShowCreditCard(false),
                            formik.handleBlur(e)
                        )}
                        handleFocus={() => setShowCreditCard(true)}
                    />

                    {   (formik.touched.cvc && formik.errors.cvc)
                        ? <div className="formik-errors">{formik.errors.cvc}</div>
                        : null
                    }

                    <Label labelfor={"dni"} text="DNI del titular de la tarjeta"/>
                    <Input type="number" name="dni" id="dni"
                        value={formik.values.dni}
                        handleChange={formik.handleChange}
                        handleBlur={formik.handleBlur}
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