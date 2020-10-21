const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

const { Client, Tools, Category } = require('./db.js');

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

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

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
 
//////// carga CATEGORY //////
 
Category.create({name: "CARPINTERIA"});
Category.create({name: "HERRERIA"});
Category.create({name: "ALBAÑILERIA"});
Category.create({name: "ELECTRICIDAD"});
Category.create({name: "OBRAS VARIAS"});
 
//////// carga Tools //////
const tool1 = {
  name: "Martillo",
  stock: 43,
  categoryId: 1
}
Tools.create(tool1);

const tool2 = {
  name: "Trompito",
  stock: 35,
  categoryId: 2
}
Tools.create(tool2);

const tool3 = {
  name: "Andamios",
  stock: 82,
  categoryId: 3
}
Tools.create(tool3)

const tool4 = {
  name: "Amoladora",
  stock: 10,
  categoryId: 4
}
Tools.create(tool4);

res.send('Carga Ok! -> TOOLS, CLIENTS, CATEGORYS')
})



module.exports = server;

