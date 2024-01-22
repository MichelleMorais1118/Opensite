function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "Michelle" && password === "Michelle") {
      window.location.replace("/principal.html");
      return false;
    } 
    else {
        alert("Senha ou usuário inválidos");
        return false;
      }
}