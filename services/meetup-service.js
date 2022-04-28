const BaseService = require("./base-service");
const MeetupModel = require("../models/meetup")

class MeetupService extends BaseService{
    //TODO:you dont need to use constructor anymore.
    // constructor(){
    //     super(MeetupModel)
    // }
    model = MeetupModel //this line and line from 6 to 8 are same.

    // async saveMeetupModel() {
    //     await this.model.save();
    //   }

}

module.exports = new MeetupService()