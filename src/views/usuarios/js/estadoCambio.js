function cambiarEstadoUser(id){
    let user = document.getElementById(id);
    alert(id);
    if(!user.checked){
        Swal.fire({
            title: '¿Desea inhabilitar el usuario?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#232323',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById("form");
                form.submit();
            }else{
                user.checked = true;
            }
        });
    }else{
        Swal.fire({
            title: '¿Desea habilitar el usuario?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#232323',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                let form = document.getElementById("form");
                form.submit();
            }else{
                user.checked = false;
            }
        });
    }
}