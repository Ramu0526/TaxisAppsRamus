document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        document.getElementById('loginMessage').textContent = 'Inicio de sesión exitoso!';
    } else {
        document.getElementById('loginMessage').textContent = 'Usuario o contraseña incorrectos.';
    }
});
