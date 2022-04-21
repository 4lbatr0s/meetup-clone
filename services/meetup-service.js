const BaseService = require("./base-service");
const MeetupModel = require("../models/meetup")

class MeetupService extends BaseService{
    constructor(){
        super(MeetupModel, `${__dirname}/../databases/meetups.json`)
    }
}

module.exports = MeetupService()