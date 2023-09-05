const express = require('express');
const passport = require('passport');
const User = require('../models/user');

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

// middleware
function isAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

module.exports = router;