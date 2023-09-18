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
    const compra = new Compras({
        idCompra: req.body.IDCompra,
        fechaCompra: req.body.fechaCompra,
        descrip: req.body.desc,
        factura: req.body.factura,
        DetallesCompra:[{
            codigoDetalleCompra: req.body.codigoDetalleCompra,
            proveedor: req.body.proveedor,
            product: req.body.product,
            precio: req.body.precio,
            cantidad: req.body.cantidad
        }]
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