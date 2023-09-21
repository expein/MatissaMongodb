const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const Swal = require('sweetalert2');


// Inicialización
const app = express();
require('./database');
require('./passport/local-auth')

// config
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view-engine', 'ejs');
app.set('port', process.env.PORT || 3000);

// MiddleWare
app.use(express.static(path.join(__dirname, 'views')))
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'mySecretSession',
    resave: false,
    saveUninitialized: false
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.appMessage =  req.flash('appMessage');
    app.locals.user = req.user;
    next();
});

// Routes
app.use('/', require('./routes/index'));

// server
app.listen(app.get('port'), () => {
    console.log("Server listening on Port", app.get('port'));
});