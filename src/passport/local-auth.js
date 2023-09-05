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
        theUser.rol = rol;
        theUser.password = theUser.encryptPass(password);
        await theUser.save();
        done(null, theUser)
    }
}));

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

}))