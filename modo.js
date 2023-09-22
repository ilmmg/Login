const mostrarcontrasena = login.html.getElementById('mostrarcontrasena');
const contrasena = login.html.getElementById('contrasena');

mostrarContrasena.addEventListener('change', function() {
    if (mostrarcontrasena.checked) {
        // Mostrar la contraseña cuando el checkbox esté marcado
        contrasena.type = 'text';
    } else {
        // Ocultar la contraseña cuando el checkbox esté desmarcado
        contrasena.type = 'password';
    }
});



