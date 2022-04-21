"use strict";
const Meetup = require('./meetup.js')
const Database = require('./database.js')
const Chalk = require("chalk");
const fs = require('fs')

const Person = require('./models/person');
const Meetup = require('./models/meetup');

const PersonService = require('./services/person-service')
const MeetupService = require('./services/meetup-service')

async function main(){
    const alice = new Person('Alice', 20)
    const rabbit = new Person('Rabbit', 2)

    const wonderland = new Meetup('Alice in Wonderland', 'Wonderland')
    alice.attend(wonderland)
    rabbit.attend(wonderland)
    wonderland.report()

    await PersonService.add(alice)
    await PersonService.add(rabbit)

    const people = await PersonService.findAll()
    console.log(people[0].name)


    await PersonService.del(1)
    const newPeople = await PersonService.findAll()

    console.log(newPeople[0].name)

    
}

(async () => {
    try {
        await main()
    } catch (error) {
        console.log(error)
    }
})