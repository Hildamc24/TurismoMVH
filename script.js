document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Limpiar errores previos
    let errors = document.querySelectorAll('.error');
    errors.forEach(error => error.textContent = '');
    
    // Obtener valores de los campos
    let firstname = document.getElementById('firstname').value.trim();
    let lastname = document.getElementById('lastname').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let birthdate = document.getElementById('birthdate').value.trim();
    let country = document.getElementById('country').value;
    let terminos = document.getElementById('terminos').checked;
    
    // Validar campos
    let isValid = true;
    
    if (firstname === '') {
        document.getElementById('error-firstname').textContent = 'El nombre es obligatorio';
        isValid = false;
    }
    
    if (lastname === '') {
        document.getElementById('error-lastname').textContent = 'El apellido es obligatorio';
        isValid = false;
    }
    
    if (phone === '') {
        document.getElementById('error-phone').textContent = 'El teléfono es obligatorio';
        isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('error-phone').textContent = 'El teléfono debe tener 10 dígitos';
        isValid = false;
    }
    
    if (email === '') {
        document.getElementById('error-email').textContent = 'El email es obligatorio';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('error-email').textContent = 'El email no es válido';
        isValid = false;
    }
    
    if (password === '') {
        document.getElementById('error-password').textContent = 'La contraseña es obligatoria';
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById('error-password').textContent = 'La contraseña debe tener al menos 6 caracteres';
        isValid = false;
    }
    
    if (birthdate === '') {
        alert('La fecha de nacimiento es obligatoria');
        isValid = false;
    }
    
    if (country === '') {
        alert('El país es obligatorio');
        isValid = false;
    }
    
    if (!terminos) {
        alert('Debe aceptar los términos y condiciones');
        isValid = false;
    }
    
    if (isValid) {
        alert('Formulario enviado correctamente');
        // Aquí puedes enviar el formulario si todo es válido
        // this.submit(); // Descomenta esto si quieres enviar el formulario
    }
});