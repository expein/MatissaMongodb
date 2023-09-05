const mostrarAdministrador = () => {
  let signinCliente = document.getElementById("signinCliente");
  let signinAdministrador = document.getElementById("signinAdministrador");

  if (signinAdministrador.style.display == "none") {
    signinAdministrador.style.display = "block";
    signinCliente.style.display = "none";
  }
};

const mostrarCliente = () => {
  let signinCliente = document.getElementById("signinCliente");
  let signinAdministrador = document.getElementById("signinAdministrador");

  if (signinCliente.style.display == "none") {
    signinAdministrador.style.display = "none";
    signinCliente.style.display = "block";
  }
};
