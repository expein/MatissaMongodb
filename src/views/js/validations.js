function valid(){
    let user = document.getElementById("usuario").value;
    let email = document.getElementById("correo").value;
    let rol = document.getElementById("role").value;
    let pass = document.getElementById("password").value;
    let expression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (user == "" || email == "" || pass == "" ) {
        alert("Campos vacíos");
        return false;
    }else if (rol == "noSelect") {
        alert("Seleccione Rol");
        return false;
    }else if (!expression.test(email)){
        alert("Correo inválido");
        return false;
    }else {
        let result = confirm("¿Desea registrar el usuario?");
        return result;
    }
}