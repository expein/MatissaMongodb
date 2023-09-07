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

router.get("/create-compra", isAuthenticated, async (req, res, next) => {
    res.render('./compras/create-compra.ejs');
});

router.post("/createComp", isAuthenticated, async (req, res, next) => {
    const compra = new Compras({
        idCompra: req.body.IDCompra,
        fechaCompra: req.body.fechaCompra,
        costoTotal: req.body.costoT,
        product: req.body.product,
        descrip: req.body.desc
    });

    compra.save().then(doc => {
        console.log('Compra registrada', doc);
        res.render('./compras/create-compra.ejs');
    })
});

// middleware
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = router;