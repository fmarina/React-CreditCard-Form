import React from 'react';
import './Form.css';
import cardChip from '../../assets/images/card-chip.jpg';

const Form = () => {

    return (
        <div className="form-container">

            <div className="credit-card-content">

                {/* <div className="credit-card-back">
                    <div className="line-magnet"></div>
                    <div className="data-cvc">
                        <div className="cvc-number">***</div>
                    </div>
                </div> */}

                <div className="credit-card">
                    <div className="chip-container"> 
                        <img src={cardChip} alt="card chip" />
                    </div>
                    <div className="number-card">**** **** **** ****</div>
                    <div className="card-data-container">
                        <div className="fullName-card">Nombre y Apellido</div>
                        <div className="expiry-date-card">MM/YY</div>
                    </div>
                </div>
            </div>

            <div className="form-content">
                <form>
                    <label>Número de la tarjeta</label>
                    <input type="number"/>

                    <label>Nombre y Apellido</label>
                    <input type="text"/>

                    <label>Fecha de expiración</label>
                    <input type="number"/>

                    <label>Código de seguridad</label>
                    <input type="number"/>

                    <label>DNI del titular de la tarjeta</label>
                    <input type="number"/>

                    <button>Continuar</button>
                </form>
            </div>

        </div>
    );

}

export default Form;