const express = require('express');
const passport = require('passport');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.ejs');
});

// USUARIOS

router.get("/registrar", (req, res, next) => {
    res.render('registrar.ejs');
});
router.post("/registrar", passport.authenticate('local-registrar', {
    successRedirect: '/profile',
    failureRedirect: '/registrar',
    passReqToCallback: true
}));

router.get("/ingresar", (req, res, next) => {
    res.render('ingresar.ejs');
});
router.post("/ingresar", passport.authenticate('local-ingresar', {
    successRedirect: '/profile',
    failureRedirect: '/ingresar',
    passReqToCallback: true
}));

router.get("/salir", (req, res, next) => {
    req.logout(() => {
        res.redirect('/');
    });
    
});

router.get("/profile", isAuthenticated, async (req, res, next) => {
    try {
        const users = await User.find({});
        res.render('profile.ejs', { users });
    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
    
});

router.get("/usuarios", isAuthenticated, async (req, res, next) => {
    try {
        const users = await User.find({});
        res.render('./usuarios/usuarios.ejs', { users });
    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
});

router.get("/create-user", isAuthenticated, async (req, res, next) => {
    try {
        const users = await User.find({});
        res.render('./usuarios/create-usuario.ejs', { users });

    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
});

router.post("/createUser", isAuthenticated, async (req, res, next) => {
    try {
        if (req.body.rol == "Admin"){
            const user = new User({
                idUser: req.body.idUser,
                name: req.body.user,
                email: req.body.email,
                password: req.body.password,
                estado: {
                    estadoUsuario: 1,
                    nombreRol: req.body.rol,
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
            });
            user.password = user.encryptPass(req.body.password);
            user.save();
        }else if (req.body.rol == "Empleado"){
            const user = new User({
                idUser: req.body.idUser,
                name: req.body.user,
                email: req.body.email,
                password: req.body.password,
                estado: {
                    estadoUsuario: 1,
                    nombreRol: req.body.rol,
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
            });
            user.password = user.encryptPass(req.body.password);
            user.save();
        }else if (req.body.rol == "Cliente") {
            const user = new User({
                idUser: req.body.idUser,
                name: req.body.user,
                email: req.body.email,
                password: req.body.password,
                estado: {
                    estadoUsuario: 1,
                    nombreRol: req.body.rol,
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
            });
            user.password = user.encryptPass(req.body.password);
            user.save();
        }
        const users = await User.find({});
        res.render('./usuarios/usuarios.ejs', { users });
    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
});

router.get("/edit-user/:id", isAuthenticated, async (req, res, next) => {
    const id = req.params.id;

    const user = await User.findOne({_id: id});

    res.render("./usuarios/edit-user.ejs", { user });
});

router.post("/editUser", isAuthenticated, async (req, res, next) => {
    try {
        const id = req.body.IDMongo;
        const email = req.body.email;

        await User.findByIdAndUpdate(id, {
            email: email
        });
        
        const users = await User.find({});
        res.render('./usuarios/usuarios.ejs', { users });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error de edición');
    }
});

// ROLES

router.get("/roles", isAuthenticated, async (req, res, next) => {
    const users = await User.find({});
    res.render('./roles/roles.ejs', { users });
});

router.get("/create-rol", isAuthenticated, async (req, res, next) => {
    try {
        const users = await User.find({});
        res.render('./roles/create-rol.ejs', { users });
    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
});

router.post("/createRol", isAuthenticated, async (req, res, next) => {
    // nothing
});

// COMPRAS
const Compras = require('../models/compra');

router.get("/compras", isAuthenticated, async (req, res, next) => {
    try {
        const compras = await Compras.find({});
        res.render('./compras/compras.ejs', { compras });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error de datos');
    }
});

router.post("/createComp", isAuthenticated, async (req, res, next) => {
     const cantidadDetalles = req.body.codigoDetalleCompra;

    const compra = new Compras({
      idCompra: req.body.IDCompra,
      fechaCompra: req.body.fechaCompra,
      descrip: req.body.desc,
      factura: req.body.factura,
      DetallesCompra: cantidadDetalles.map((detalle, index) => ({
        codigoDetalleCompra: Array.isArray(req.body.codigoDetalleCompra) ? req.body.codigoDetalleCompra[index] : req.body.proveedor,
        proveedor: Array.isArray(req.body.proveedor) ? req.body.proveedor[index] : req.body.proveedor,
        product: Array.isArray(req.body.product) ? req.body.product[index] : req.body.product,
        precio: Array.isArray(req.body.precio) ? req.body.precio[index] : req.body.precio,
        cantidad: Array.isArray(req.body.cantidad) ? req.body.cantidad[index] : req.body.cantidad,
      })),
    });

    compra.save()
    .then(async doc => {
        const compras = await Compras.find({});
        res.render("./compras/compras.ejs", { compras });
        console.log('Compra registrada', doc);
    }).catch(err => {
        console.log("Error al registrar: ",err.message);
    });
});

router.get("/edit-compra/:id", isAuthenticated, async (req, res, next) => {
    const id = req.params.id;

    const compra = await Compras.findOne({idCompra: id});

    res.render("./compras/edit-compra.ejs", { compra });
});

router.post("/editCompra", isAuthenticated, async (req, res, next) => {
    try {
        const id = req.body.IDMongo;
        const fechaCompra = req.body.fechaCompra;
        const desc = req.body.desc;

        console.log(fechaCompra);

        await Compras.findByIdAndUpdate(id, {
            fechaCompra: fechaCompra,
            descrip: desc
        });
        
        const compras = await Compras.find({});
        res.render('./compras/compras.ejs', { compras });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error de edición');
    }
});

router.get("/delete-compra/:id", isAuthenticated, async (req, res, next) => {
    try {
        const id = req.params.id;

        await Compras.findByIdAndDelete(id);

        const compras = await Compras.find({});
        res.render('./compras/compras.ejs', { compras });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error al eliminar');
    }
    
});

// SERVICIOS
const Servicios = require('../models/servicio');

router.get("/servicios", isAuthenticated, async (req, res, next) => {
    try {
        const servicios = await Servicios.find({});
        res.render('./servicios/servicios.ejs', { servicios });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error de datos');
    }
});

router.get("/create-servicio", isAuthenticated, async (req, res, next) => {
    try {
        const servicios = Servicios.find().sort({idCita: -1}).limit(1);
        res.render("./servicios/create-servicio.ejs", { servicio: servicios[0] });
    } catch (error) {
        console.log("Error al consultar DB", error);
        res.status(500).send("Error de datos")
    }
});

router.post("/createSer", isAuthenticated, async (req, res, next) => {
    const servicio = new Servicios({
        idServicio: req.body.IDServicio,
        idEmpleado: req.body.IDEmpleado,
        idCita: req.body.IDCita,
        nombreServicio: req.body.nombreServicio,
        precioServicio: req.body.precioServicio,
        nombreEmpleado: req.body.nombreEmpleado,
        cedulaEmpleado: req.body.cedulaEmpleado,
        duracionServicio: req.body.duracionServicio,
        estadoCita: req.body.estadoCita,
        fechaCita: req.body.fechaCita    
    });
    servicio.save()
    .then(async doc => {
        const servicios = await Servicios.find({});
        console.log('Servicio registrado', doc);
        res.render('./servicios/servicios.ejs', { servicios });
    }).catch(err => {
        console.log("Error al registrar: ", err.message);
    });
});

router.get("");

// VENTAS

const Ventas = require("../models/venta");

router.get("/ventas", isAuthenticated, async (req, res, next) => {
    try {
        const ventas = await Ventas.find({});
        res.render("./ventas/ventas.ejs", { ventas })
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
});

router.get("/create-venta-servicio", isAuthenticated, async (req, res, next) => {
    try {
        const ventas = Ventas.find().sort({idVenta: -1}).limit(1);
        res.render("./ventas/create-venta-servicio.ejs", { venta: ventas[0] });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
});

router.get("/create-venta-pedido", isAuthenticated, async (req, res, next) => {
    try {
        const ventas = Ventas.find().sort({idVenta: -1}).limit(1);
        res.render("./ventas/create-venta-pedido.ejs", { venta: ventas[0] });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
});

router.get("/createVentaSer", isAuthenticated, async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
});

router.get("/createVentaPed", isAuthenticated, async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
});

// middleware
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = router;