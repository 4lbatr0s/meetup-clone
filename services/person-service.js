const BaseService = require("./base-service");
const PersonModel = require("../models/person")

class PersonService extends BaseService{
    constructor(){
        super(PersonModel, `${__dirname}/../databases/persons.json`)
    }
}

module.exports = PersonService()