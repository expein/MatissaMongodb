// Validar Usuario

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

// Validar Compras

function validarCompra(){
    let id = document.getElementById("IDCompra").value;
    let date = document.getElementById("fechaCompra").value;
    let cost = document.getElementById("costoT").value;
    let desc = document.getElementById("desc").value;
    let prod = document-getElementById("product").value;

    if (id == "" || date == "" || cost == "" || desc == ""){
        alert ("Faltan datos en la compra.");
        return false;
    }else if (prod == "noSelect"){
        alert("Seleccione rol");
        return false;
    }else {
        let confir = confirm("¿Desea registrar la compra?");
        return confir;
    }
}




function backPage(){
    window.location="compras.ejs";
}