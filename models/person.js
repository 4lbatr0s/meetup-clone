

const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    //TODO: these are all called VALIDATON.
    type: String,
    required: true,
    minlength: 3,
  },
  age: {
    type: Number,
    default: 18,
    //required:true,
    //min:18  //if we open these two lines, that means we cant create an age smaller than 18
  }, //TODO: meetups array is an object of meetup objects.
  meetups: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Meetup", //TODO: this Meetup is the meetup we export in meetup.js file.
      autopopulate: {
        maxDepth: 1,
      },
    },
  ],
  //we dont need to include id, because mongodb will create unique id for every model instance.
});


//Auto-populate
PersonSchema.plugin(require("mongoose-autopopulate"));

const PersonModel = mongoose.model("Person", PersonSchema);

module.exports = PersonModel;
