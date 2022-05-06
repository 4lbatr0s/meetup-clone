
const router = require("express").Router();
const meetupService = require("../services/meetup-service");
const PersonService = require("../services/person-service");
const attendanceService = require("../services/attendance-service");

router.get("/all", async (req, res) => {
    const people = await PersonService.findAll();
    res.render('items', {items:people})
    // res.render("person", { people: people }); //renders person.pug, no need for pug extension because view engine handles it for us.
  }); //TODO: people:people, the people on the left is the object we send to the person.pug file for dynamic rendering.
  
router.get("/all/json", async (req, res) => {
    const people = await PersonService.findAll();
    res.send(people)
  });   
  router.get("/:id", async (req, res) => {
    const person = await PersonService.find(req.params.id);
    if(!person) res.status(404)
    res.render('data', {data:person})
  });
  
  router.get("/:id/json", async (req, res) => {
    const person = await PersonService.find(req.params.id);
    if(!person) res.status(404)
    res.send(person)
  });


  //uses axios.
  router.post("/", async (req, res) => {
    const person = await PersonService.add(req.body);
    res.send(person);
  });
  
  router.delete("/:id", async (req, res) => {
    const person = await PersonService.del(req.params.id);
    res.send("ok");
  });


  //interactions
  //attend meeting.
  router.post("/:id/meetups", async (req, res) => {
    await attendanceService.attendMeetup(req.params.id, req.body.meetup);  
  });
  
  

 module.exports = router