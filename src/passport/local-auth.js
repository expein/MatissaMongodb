const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((theUser, done) => {
    done(null, theUser.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-registrar', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, name, password, done) => {

    const nameResult = await User.findOne({name: name})
    if(nameResult){
        return(done(null, false, req.flash('appMessage', 'El nombre ya existe.')))
    }else{
        const email = req.body.email;
        const rol = req.body.rol;
        const theUser = new User();
        theUser.name = name;
        theUser.email = email;
        theUser.password = theUser.encryptPass(password);
        if (rol == "Admin"){
            theUser.estado = {
                estadoUsuario: 1,
                nombreRol: rol,
                estadoRol: 1,
                nombrePermiso: {
                    configuracion: [ 
                        "registrarUsuario", 
                        "consultarUsuario", 
                        "modificarUsuario" 
                    ],
                    roles: [
                        "registrarRol",
                        "consultarRol",
                        "modificarRol",
                        "eliminarRol"
                    ],
                    compras: [
                        "registrarCompra",
                        "consultarCompra",
                        "modificarCompra"
                    ],
                    ventas: [
                        "registrarVenta",
                        "consultarVenta",
                        "modificarVenta"
                    ],
                    servicios: [
                        "registrarServicio",
                        "consultarServicio",
                        "modificarServicio",
                        "eliminarServicio"
                    ],
                    citas: [
                        "registrarCita",
                        "consultarCita",
                        "modificarCita",
                        "eliminarCita"
                    ],
                    pedidos: [
                        "registrarPedido",
                        "consultarPedido",
                        "modificarPedido",
                        "eliminarPedido"
                    ],
                    empleados: [
                        "registrarEmpleado",
                        "consultarEmpleado",
                        "modificarEmpleado",
                        "eliminarEmpleado"
                    ],
                    clientes: [
                        "registrarCliente",
                        "consultarCliente",
                        "modificarCliente",
                        "eliminarCliente"
                    ],
                    productos: [
                        "registrarProducto",
                        "consultarProducto",
                        "modificarProducto",
                        "eliminarProducto"
                    ],
                    proveedores: [
                        "registrarProveedor",
                        "consultarProveedor",
                        "modificarProveedor",
                        "eliminarProveedor"
                    ],
                    servicio: [
                        "registrarServicio",
                        "consultarServicio",
                        "modificarServicio"
                    ]
                }
            }
        }else if (req.body.rol == "Empleado"){
            theUser.estado = {
                estadoUsuario: 1,
                nombreRol: rol,
                estadoRol: 1,
                nombrePermiso: {
                    configuracion: [ 
                        "registrarUsuario", 
                        "consultarUsuario", 
                        "modificarUsuario" 
                    ],
                    
                    compras: [
                        "registrarCompra",
                        "consultarCompra",
                        "modificarCompra"
                    ],
                    ventas: [
                        "registrarVenta",
                        "consultarVenta",
                        "modificarVenta"
                    ],
                    servicios: [
                        "registrarServicio",
                        "consultarServicio",
                        "modificarServicio",
                        "eliminarServicio"
                    ],
                    citas: [
                        "registrarCita",
                        "consultarCita",
                        "modificarCita",
                        "eliminarCita"
                    ],
                    pedidos: [
                        "registrarPedido",
                        "consultarPedido",
                        "modificarPedido",
                        "eliminarPedido"
                    ],
                    
                    clientes: [
                        "registrarCliente",
                        "consultarCliente",
                        "modificarCliente",
                        "eliminarCliente"
                    ],
                    productos: [
                        "registrarProducto",
                        "consultarProducto",
                        "modificarProducto",
                        "eliminarProducto"
                    ]
                }
            }
        }else if (rol == "Cliente") {
            theUser.estado = {
                    estadoUsuario: 1,
                    nombreRol: rol,
                    estadoRol: 1,
                    nombrePermiso: {
                        citas: [
                            "registrarCita",
                            "consultarCita",
                            "modificarCita",
                            "eliminarCita"
                        ],
                        pedidos: [
                            "registrarPedido",
                            "consultarPedido",
                            "modificarPedido",
                            "eliminarPedido"
                        ]
                    }
                }
            }
        await theUser.save();
        done(null, theUser)
        }
    }
));

passport.use('local-ingresar', new localStrategy({
    usernameField: 'user',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, name, password, done) => {
    const result = await User.findOne({name: name});
    if(!result){
        return(done(null, false, req.flash('appMessage', 'Nombre no encontrado')));
    }
    if(!result.validatePass(password)){
        return(done(null, false, req.flash('appMessage', 'Contraseña incorrectos')));
    }
    done(null, result)
}));