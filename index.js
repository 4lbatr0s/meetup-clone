"use strict";

const express = require("express");
const bodyParser = require("body-parser");


const personRouter = require('./routes/person')
const meetupRouter = require('./routes/meetup')


require("./mongo-connection"); //we can directly require this file because we don't export anything from mongo-connection.


const app = express(); //initialize express server, create web application.

app.set("view engine", "pug"); //we should tell the express to use which specific render engine it should use.
app.use(bodyParser.json()); //we need to use bodyParser in order to parse the body we send with axios from google developer tools/ for now.



//first parameter is the route path, second parameter is the callback function to decide how to answer the route path.
//name does not mean anything but order is important.
app.get("/", (req, res) => {
  // res.sendFile(`${__dirname}/index.html`) //absolute path of this file.
  res.render("index");
});

app.use('/person', personRouter)
app.use('/meetup', meetupRouter)

//app.listen requires a callback function because it needs to request a permission to use the port 3000.
app.listen(3000, () => {
  console.log(`Server listening at port  ${3000}`);
});
