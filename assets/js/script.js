document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Implementar aqui a lógica de autenticação, por exemplo, chamando uma API.
    console.log('Nome:', username);
    console.log('Senha:', password);
});