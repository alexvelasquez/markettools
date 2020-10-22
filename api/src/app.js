const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')

const { Client, Tools, User } = require('./db.js');
const passport = require('passport');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("este es el username", username)
    console.log("este es el password", password)
    User.findOne({ where: { username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Nombre de usuario incorrecto.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Contraseña incorrecta.' });
      }
      return done(null, user);
    }});
  }
));

// Esto permite que la información almacenada en la sesión sea lo más simple y pequeña posible
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Al deserealizar la información del usuario va a quedar almacenada en req.user
passport.deserializeUser((id, done) => {
  console.log("ENTRA EL ID", id)
  User.findByPk(id)
  .then((user) => {
    done(null, user.dataValues);
  }).catch(err => {
    return done(err);
  })
  });

server.use(session({
  secret: "secret",
  resave: true,
  saveUninitialized: true
}));

server.use(passport.initialize());
server.use(passport.session());

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});



server.post('/login', (req, res) => {
  //Recibir las credenciales e iniciar sesion.
  passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
  })
})

function isAuthenticated(req, res, next) {
  if(req.isAuthenticated()){
    console.log("entre en el authenticated")
    next();
  }
  else{
    res.send(false);
  }
}

server.get("/logout", (req, res) => {
  req.logout();
  res.status(200).send("Ok!")
});

server.get("/login", isAuthenticated, (req, res) => {
  res.send(req.user)
});






//-------------------------------------------------------------------------------------------

///////// HARDCOD CLIENTES //////

server.post('/registerhd', (req, res) => {

  const client1 = {
    name: 'Cesar',
    lastname: "Sanchez",
    dni: 38272939,
    password: 1234,
    email: "asd8@gmail.com",
  }

Client.create(client1)

  const client2 = {
    name: 'Facundo',
    lastname: "Sadava",
    dni: 38272939,
    password: 1234,
    email: "asd7@gmail.com",
  }
  
Client.create(client2)

  const client3 = {
    name: 'Alex',
    lastname: "Velazquez",
    dni: 38272939,
    password: 1234,
    email: "asd6@gmail.com",
  }

Client.create(client3)

  const client4 = {
    name: 'Leonel',
    lastname: "Messi",
    dni: 38272939,
    password: 1234,
    email: "asd5@gmail.com",
  }

Client.create(client4)

  const client5 = {
    name: 'Sergio',
    lastname: "Aguero",
    dni: 38272939,
    password: 1234,
    email: "asd4@gmail.com",
  }

Client.create(client5)

  const client6 = {
    name: 'Diego',
    lastname: "Acosta",
    dni: 38272939,
    password: 1234,
    email: "asd3@gmail.com",
  }

Client.create(client6)

  const client7 = {
    name: 'Andrea',
    lastname: "Anderson",
    dni: 38272939,
    password: 1234,
    email: "asd2@gmail.com",
  }

Client.create(client7)

  const client8 = {
    name: 'Carola',
    lastname: "Bianco",
    dni: 38272939,
    password: 1234,
    email: "asd1@gmail.com",
  }

Client.create(client8)
res.send('Ok!')
})

//HARCODEANDO TOOLS

server.post('/toolhd', (req, res) => {
  
  const tool1 = {
    name: "Martillo",
    stock: 43
  }
  Tools.create(tool1);

  const tool2 = {
    name: "Trompito",
    stock: 35
  }
  Tools.create(tool2);

  const tool3 = {
    name: "Andamios",
    stock: 82
  }
  Tools.create(tool3)

  const tool4 = {
    name: "Amoladora",
    stock: 10
  }
  Tools.create(tool4);

  res.send('Tools creadas en db')
})

server.post("/loginhd", (req, res) => {
  const user1 = {
    username: "facundo94",
    password: 1234
  }
  User.create(user1);
  res.send(user1)
})

module.exports = server;

