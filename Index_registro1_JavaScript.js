document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(username)) {
        document.getElementById('registerMessage').textContent = 'El usuario ya existe.';
    } else {
        localStorage.setItem(username, password);
        document.getElementById('registerMessage').textContent = 'Registro exitoso!';
    }
});
