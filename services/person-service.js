const BaseService = require("./base-service");
const PersonModel = require("../models/person");

class PersonService extends BaseService {
  // constructor() {
  //     super(PersonModel)
  // }
  model = PersonModel;

  //TODO:create methods in mongodb.
  //it cant be =>, should be function()
  //this function is here and not in person model because models should not depend on each other, services should.
  // async attendMeetup(person, meetup) {
  //   person.meetups.push(meetup); //this is not the regular push function, mongodb changed the push function, you pass whole object, if there is an array in that object, it only pushes the array.
  //   meetup.attendes.push(person);
  //   await person.save();
  //   await meetup.save();
  // }

  // async savePersonModel() {
  //   await this.model.save();
  // }


  async findPeersOver18(cb){
    return this.model.find({
      age:{
        $gte:18 //greater and equals to 18.
      }
    })
  }
}

module.exports = new PersonService();
