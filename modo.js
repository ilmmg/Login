const mostrarContrasenaCheckbox = login.html.getElementById('mostrarcontrasena');
const contrasenaInput = login.html.getElementById('contrasena');

mostrarContrasenaCheckbox.addEventListener('change', function() {
    if (mostrarContrasenaCheckbox.checked) {
        // Mostrar la contraseña cuando el checkbox esté marcado
        contrasenaInput.type = 'text';
    } else {
        // Ocultar la contraseña cuando el checkbox esté desmarcado
        contrasenaInput.type = 'password';
    }
});



