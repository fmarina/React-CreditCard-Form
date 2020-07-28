const validate = (values) => {
    const errors = {};

    if(!values.cardNumber) {
        errors.cardNumber = "Requerido";
    } else if(typeof (values.cardNumber) !== "number" ) {
        errors.cardNumber = "Tipo de dato incorrecto";
    } else if (String(values.cardNumber).length !== 16 ) {
        errors.cardNumber = "Error en el número de tarjeta";
    }

    const regex = /^([a-zA-Z _-]+)$/
    if(!values.fullName) {
        errors.fullName = "Requerido";
    } else if (values.fullName.length < 4) {
        errors.fullName = "Ingrese el nombre y apellido completo"
    } else if (!regex.test(values.fullName)) {
        errors.fullName = "Tipo de dato incorrecto";
    }

    if(!values.cvc) {
        errors.cvc = "Requerido";
    } else if(typeof(values.cvc) !== "number" ) {
        errors.cvc = "Tipo de dato incorrecto";
    } else if (String(values.cvc).length !== 3) {
        errors.cvc = "Debe ingresar los 3 dígitos de seguridad";
    }

    if(!values.dni) {
        errors.dni = "Requerido";
    } else if (typeof(values.dni) !== "number") {
        errors.dni = "Tipo de dato inválido";
    } else if (String(values.dni).length !== 7 || String(values.dni).length !== 8) {
        errors.dni = "Documento inválido";
    }

    
    return errors;
}

export default validate;