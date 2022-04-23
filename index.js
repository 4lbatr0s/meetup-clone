"use strict"

const express = require('express')
const flatted = require('flatted')
const Person = require('./models/person')
const PersonService = require('./services/person-service')
const bodyParser = require('body-parser')

const app = express() //initialize express server, create web application.

app.use(bodyParser.json()) //we need to use bodyParser in order to parse the body we send with axios from google developer tools/ for now.
app.set('view engine', 'pug') //we should tell the express to use which specific render engine it should use.


//first parameter is the route path, second parameter is the callback function to decide how to answer the route path.
//name does not mean anything but order is important.
app.get('/', (req,res) => {
    // res.sendFile(`${__dirname}/index.html`) //absolute path of this file.
    res.render('index')
})

app.get('/person/all', async (req,res) => {
    const people = await PersonService.findAll()
    res.render('person', {people:people}) //renders person.pug, no need for pug extension because view engine handles it for us.
})//TODO: people:people, the people on the left is the object we send to the person.pug file for dynamic rendering.

app.get('/person/:id', async (req,res) => {
    const id = req.params.id
    const person = await PersonService.find(id)
    res.send(person)
})

app.post('/person', async(req, res) => {
    const person = await PersonService.add(req.body)
    res.send(person)
})

app.delete('/person/:id', async(req, res) => {
    const person =  await PersonService.del(req.params.id)
    res.send("ok")
})

//app.listen requires a callback function because it needs to request a permission to use the port 3000.
app.listen(3000, () => {
    console.log(`Server listening at port  ${3000}`);
} )