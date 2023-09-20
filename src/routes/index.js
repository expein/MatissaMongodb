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
        res.render('profile.ejs');
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
        const rols = await Roles.find({});
        res.render('./usuarios/create-usuario.ejs', { users, rols });

    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
});

router.post("/createUser", isAuthenticated, async (req, res, next) => {
    try {
        if (req.body.rol == "Admin"){
            const user = new User({
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
        res.render("./usuarios/usuarios.ejs", { users });
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

router.get("/delete-user/:id", isAuthenticated, async (req, res) => {
    try {
        const id = req.params.id;

        await User.findByIdAndDelete(id);

        const users = await User.find({});
    res.render("./usuarios/usuarios.ejs", { users });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
    
});

router.post("/buscarUser", isAuthenticated, async (req, res, next) => {
    const busca = req.body.busca;

    try {
        const user = await User.find({ $or: [ { name: busca }, { email: busca } ]});
        res.render("./usuarios/buscar-user.ejs", { user });
    } catch (error) {
        
    }
});

// ROLES
const Roles = require("../models/roles");

router.get("/roles", isAuthenticated, async (req, res, next) => {
    const rols = await Roles.find({});
    res.render('./roles/roles.ejs', { rols });
});

router.get("/create-rol", isAuthenticated, async (req, res, next) => {
    try {
        const rols = await Roles.find({});
        res.render('./roles/create-rol.ejs', { rols });
    } catch (error){
        console.error(error);
        res.status(500).send('Error datos');
    }
});

router.post("/createRol", isAuthenticated, async (req, res, next) => {
    const configuracion = [];
    const roles = [];
    const compras = [];
    const ventas = [];
    const servicios = [];
    const pedidos = [];
    const citas = [];
    const clientes = [];
    const empleados = [];
    const proveedores = [];
    const productos = [];
    // config
    if (req.body.createUser){
        configuracion.push(req.body.createUser);
    }
    if (req.body.modifyUser){
        configuracion.push(req.body.modifyUser);
    }
    if (req.body.deleteUser){
        configuracion.push(req.body.deleteUser);
    }
    if (req.body.readUser){
        configuracion.push(req.body.readUser);
    }
    // roles
    if (req.body.createRol){
        roles.push(req.body.createRol);
    }
    if (req.body.modifyRol){
        roles.push(req.body.modifyRol);
    }
    if (req.body.deleteRol){
        roles.push(req.body.deleteRol);
    }
    if (req.body.readRol){
        roles.push(req.body.readRol);
    }
    // compras
    if (req.body.createCompra){
        compras.push(req.body.createCompra);
    }
    if (req.body.modifyCompra){
        compras.push(req.body.modifyCompra);
    }
    if (req.body.deleteCompra){
        compras.push(req.body.deleteCompra);
    }
    if (req.body.readCompra){
        compras.push(req.body.readCompra);
    }
    // ventas
    if (req.body.createVenta){
        ventas.push(req.body.createVenta);
    }
    if (req.body.modifyVenta){
        ventas.push(req.body.modifyVenta);
    }
    if (req.body.deleteVenta){
        ventas.push(req.body.deleteVenta);
    }
    if (req.body.readVenta){
        ventas.push(req.body.readVenta);
    }
    // servicios
    if (req.body.createServicio){
        servicios.push(req.body.createServicio);
    }
    if (req.body.modifyServicio){
        servicios.push(req.body.modifyServicio);
    }
    if (req.body.deleteServicio){
        servicios.push(req.body.deleteServicio);
    }
    if (req.body.readServicio){
        servicios.push(req.body.readServicio);
    }
    // pedidos
    if (req.body.createPedido){
        pedidos.push(req.body.createPedido);
    }
    if (req.body.modifyPedido){
        pedidos.push(req.body.modifyPedido);
    }
    if (req.body.deletePedido){
        pedidos.push(req.body.deletePedido);
    }
    if (req.body.readPedido){
        pedidos.push(req.body.readPedido);
    }
    // citas
    if (req.body.createCita){
        citas.push(req.body.createCita);
    }
    if (req.body.modifyCita){
        citas.push(req.body.modifyCita);
    }
    if (req.body.deleteCita){
        citas.push(req.body.deleteCita);
    }
    if (req.body.readCita){
        citas.push(req.body.readCita);
    }
    // clientes
    if (req.body.createCliente){
        clientes.push(req.body.createCliente);
    }
    if (req.body.modifyCliente){
        clientes.push(req.body.modifyCliente);
    }
    if (req.body.deleteCliente){
        clientes.push(req.body.deleteCliente);
    }
    if (req.body.readCliente){
        clientes.push(req.body.readCliente);
    }
    // empleados
    if (req.body.createEmpleado){
        empleados.push(req.body.createEmpleado);
    }
    if (req.body.modifyEmpleado){
        empleados.push(req.body.modifyEmpleado);
    }
    if (req.body.deleteEmpleado){
        empleados.push(req.body.deleteEmpleado);
    }
    if (req.body.readEmpleado){
        empleados.push(req.body.readEmpleado);
    }
    // proveedores
    if (req.body.createProveedor){
        proveedores.push(req.body.createProveedor);
    }
    if (req.body.modifyProveedor){
        proveedores.push(req.body.modifyProveedor);
    }
    if (req.body.deleteProveedor){
        proveedores.push(req.body.deleteProveedor);
    }
    if (req.body.readProveedor){
        proveedores.push(req.body.readProveedor);
    }
    // productos
    if (req.body.createProducto){
        productos.push(req.body.createProducto);
    }
    if (req.body.modifyProducto){
        productos.push(req.body.modifyProducto);
    }
    if (req.body.deleteProducto){
        productos.push(req.body.deleteProducto);
    }
    if (req.body.readProducto){
        productos.push(req.body.readProducto);
    }

    try {
        const rol = new Roles({
            nombreRol: req.body.rol,
            estadoRol: req.body.rolStat,
            permisos: {
                configuracion,
                roles,
                compras,
                ventas,
                servicios,
                pedidos,
                citas,
                clientes,
                empleados,
                proveedores,
                productos
            }
        });
        rol.save();
        const rols = await Roles.find({});
        res.render('./roles/roles.ejs', { rols });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error datos');
    }
});

router.get("/delete-rol/:id", isAuthenticated, async (req, res, next) => {
    try {
        const id = req.params.id;
    
        await Roles.findByIdAndDelete(id);

        const rols = await Roles.find({});
        res.render("./roles/roles.ejs", { rols });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
    
    

    
});

router.get("/view-rol/:id", isAuthenticated, async (req, res, next) => {
    const id = req.params.id;

    const rol = await Roles.findOne({ _id: id });

    res.render("./roles/ver-rol.ejs", { rol });
});

router.post("/buscarRol", isAuthenticated, async (req, res, next) => {
    const busca = req.body.busca;
    try {
        if (!isNaN(busca)){
            const rols = await Roles.find({ estadoRol: busca });
            res.render("./roles/buscar-rol.ejs", { rols });
        }else{
            const rols = await Roles.find({ nombreRol: busca });
            res.render("./roles/buscar-rol.ejs", { rols });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de busca");
    }
});

const PDF = require('pdfkit');

router.get("/create-reporte-roles", isAuthenticated, async (req, res, next) => {
    try {
        const roles = await Roles.find({});
    } catch (error) {
        console.log(error);
        res.status(500).send("Error de datos");
    }
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

router.get('/detallesCompra', isAuthenticated, async (req, res, next) =>{
    try{
        const compras = await Compras.find({});
        res.render('./compras/detallesCompra.ejs', {compras})
    }catch (error){
        console.error(error);
        res.status(500).send('Error de datos')
    }
})

router.post("/createComp", isAuthenticated, async (req, res, next) => {
     const cantidadDetalles = req.body.codigoDetalleCompra;

    let compraData = {
      idCompra: req.body.IDCompra,
      fechaCompra: req.body.fechaCompra,
      descrip: req.body.desc,
      factura: req.body.factura,
      costoTotalCompra: 0
    };

    if (Array.isArray(cantidadDetalles)) {
      compraData.DetallesCompra = cantidadDetalles.map((detalle, index) => ({
        codigoDetalleCompra: Array.isArray(req.body.codigoDetalleCompra)
          ? req.body.codigoDetalleCompra[index]
          : req.body.codigoDetalleCompra,
        proveedor: Array.isArray(req.body.proveedor)
          ? req.body.proveedor[index]
          : req.body.proveedor,
        product: Array.isArray(req.body.product)
          ? req.body.product[index]
          : req.body.product,
        precio: Array.isArray(req.body.precio)
          ? req.body.precio[index]
          : req.body.precio,
        cantidad: Array.isArray(req.body.cantidad)
          ? req.body.cantidad[index]
          : req.body.cantidad,
        costoTotalUnitario: req.body.cantidad[index] * req.body.precio[index]
      }));
    } else {
      compraData.DetallesCompra = [
        {
          codigoDetalleCompra: req.body.codigoDetalleCompra,
          proveedor: req.body.proveedor,
          product: req.body.product,
          precio: req.body.precio,
          cantidad: req.body.cantidad,
          costoTotalUnitario: creq.body.cantidad[index] * req.body.precio[index]
        },
      ];
    }

    let compraTotal = 0;

    compraData.DetallesCompra.forEach(costoCompraTotal => {
        compraTotal += costoCompraTotal.costoTotalUnitario
    });

    compraData.costoTotalCompra = compraTotal;

    const compra = new Compras(compraData);

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