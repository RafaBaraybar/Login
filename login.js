document.addEventListener('DOMContentLoaded', function() {
    // Manejo del checkbox para mostrar y ocultar formularios
    const chk = document.getElementById('chk');
    const signupForm = document.querySelector('.signup');
    const loginForm = document.querySelector('.login');

    chk.addEventListener('change', function() {
        if (chk.checked) {
            signupForm.style.display = 'block';
            loginForm.style.display = 'none';
        } else {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        }
    });

    // Evento para enviar el formulario de registro
    const signupFormElement = document.getElementById('signup-form');
    signupFormElement.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Aquí puedes añadir código para manejar el envío del formulario de registro
        // Por ejemplo, puedes enviar los datos usando Fetch API o realizar validaciones
        console.log('Formulario de registro enviado');
    });

    // Evento para enviar el formulario de inicio de sesión
    const loginFormElement = document.getElementById('login-form');
    loginFormElement.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Aquí puedes añadir código para manejar el envío del formulario de inicio de sesión
        // Por ejemplo, puedes enviar los datos usando Fetch API o realizar validaciones
        console.log('Formulario de inicio de sesión enviado');
    });
});