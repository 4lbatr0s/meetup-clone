const Person = require('./person')
const chalk = require('chalk');

module.exports =class Meetup{
    constructor(name, location, attendees = [], id) {
      this.name = name;
      this.attendees = attendees;
      this.location = location;
      this.id = id;
    }
    printAttendeeNames() {
      this.attendees.forEach(printName);
    }

    report() {
      console.log(chalk.blue.bgRed.bold(this.name), 'meetup is held at', chalk.green(this.location), 'and number of attendees are', this.attendees.length)
    }
    // static create(obj){ //TODO: it's the Meetup class' function(it isn't a method like printAttendeeNames())
    //   return new Meetup(obj.name, obj.attendees)
    // }

    //there is a different syntax for writing create object in JavaScript.
    static create({name,location,attendees,id}){
      let meetup = new Meetup(name,location,attendees,id)
      
      meetup.attendees = attendees.map(Person.create)
      
      return new Meetup(name,location, attendees, id) //TODO: How this function works?
      
      
      //TODO:We tell, I'm going to pass an object to you, this object will involve(may be more than two) two properties which are called name and attendees 
    }
  };

  printName = (person) => console.log(person.name);

