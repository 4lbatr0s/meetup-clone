const router = require("express").Router();

const meetupService = require("../services/meetup-service");

router.get("/all", async (req, res) => {
    const meetups = await meetupService.findAll();
    res.render("meetup", { meetups: meetups }); //renders meetup.pug, no need for pug extension because view engine handles it for us.
  }); //TODO: meetups:people, the people on the left is the object we send to the meetup.pug file for dynamic rendering.
  
  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const meetup = await meetupService.find(req.params.id);
    res.send(meetup);
    console.log(meetup);
  });
  
  //uses axios.
  router.post("/", async (req, res) => {
    const meetup = await meetupService.add(req.body);
    res.send(meetup);
  });
  
  router.delete("/:id", async (req, res) => {
    const meetup = await meetupService.del(req.params.id);
    res.send("ok");
  });
  
  module.exports = router