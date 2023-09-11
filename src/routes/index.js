const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const Compras = require('../models/compra');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index.ejs');
});

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
        factura: req.body.factura
    });

    compra.save()
    .then(async doc => {
        const compras = await Compras.find({});
        console.log('Compra registrada', doc);
        res.render('./compras/compras.ejs', {compras});
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

// middleware
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = router;