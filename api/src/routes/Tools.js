const server = require('express').Router();
const e = require('express');
const { Tools, Category } = require('../db.js');


//**************************************
//|                T O O L S           |
//|                                    |
//**************************************
server.get('/', (req, res, next) => {
    Tools.findAll()
    .then(tools => {
        res.send(tools)
    })
    .catch(err => console.log(err))
})

server.get('/:id', (req, res, next) => {
    const { id } = req.params
    Tools.findOne({where: {id}})
    .then(tool => {
        res.send(tool)
    })
    .catch(next)
}) 

server.post('/insertTools', (req, res, next) => {
       
      Tools.create(req.body)    
      .then(date => {
        res.send(date)
    })

     
  })


//**************************************
//|                CATRGORYES          |
//|                                    |
//**************************************
server.post('/insertCategory', (req, res, next) => {

    console.log(req.body)  
    const {nameCategory} = req.body 
    
    Category.create({name: nameCategory})

  .then(date => {
      res.send(date)
  })
  })

 
module.exports = server;