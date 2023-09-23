const mostrarcontrasena = document.getElementById('mostrarcontrasena');
const contrasena = document.getElementById('contrasena');

mostrarcontrasena.addEventListener('change', function() {
    if (this.checked) {
        // Mostrar la contraseña cuando el checkbox esté marcado
        contrasena.type = 'text';
    } else {
        // Ocultar la contraseña cuando el checkbox esté desmarcado
        contrasena.type = 'password';
    }
});



