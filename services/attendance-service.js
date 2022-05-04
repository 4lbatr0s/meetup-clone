const BaseService = require('./base-service')
const personService = require('./person-service')
const meetupService = require('./meetup-service')


//TODO: Why here?, because we do not want to give person service the power to change meetup vice versa.
class AttendanceService{
async attendMeetup(personId, meetupId) {
    const person = await personService.find(personId);
    const meetup = await meetupService.find(meetupId); 
    person.meetups.push(meetup);
    meetup.attendes.push(person);
    await personService.saveModel();
    await meetupService.saveModel();
  };
}

module.exports = new AttendanceService()
  