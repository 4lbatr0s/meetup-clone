const mongoose = require("mongoose")

const MeetupSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minlength:3
  },
  location:{
    type:String,
    default:''
  },
  attendees:[{
    type:mongoose.SchemaTypes.ObjectId,
    ref:'Person',
    autopopulate:{ //TODO: prevents looping.
      maxDepth:1
    }
  }]
  //we dont need to include id, because mongodb will create unique id for every model instance.
}) 


//Auto-populate
MeetupSchema.plugin(require('mongoose-autopopulate'))


const MeetupModel = mongoose.model('Meetup', MeetupSchema)


module.exports = MeetupModel
