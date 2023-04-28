const validation = (userData) => {

const errors = {};
    if(!/^[A-Z0-9._%+-]+@[AZ0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El email ingresado no es valido';
    }

    if(!userData.email){
        errors.email = 'Por favor ingresa un email valido';
    }

    if(userData.email.length > 35){
        errors.email = 'El email no debe superar los 35 caracteres';
    }

    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'La contraseña debe contener al menos un numero'
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'La contraseña debe contener entre 6 y 10  craracteres'
    }
    
    return errors;
}

export default validation;