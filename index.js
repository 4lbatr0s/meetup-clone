"use strict";
const Person = require('./person.js')
const Meetup = require('./meetup.js')
const Database = require('./database.js')
const Chalk = require("chalk");
const data = Database.load('database.json')
console.log(data);