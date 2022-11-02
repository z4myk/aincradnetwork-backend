const express = require("express");

const eventCtrl = require('../controllers/events.controller')

const router = express.Router();
//create event
router.post("/event", eventCtrl.createEvents);

//fetch event
router.get("/event", eventCtrl.fetchEvents);

//delete event
router.delete("/event/:id", eventCtrl.deleteEvents);





module.exports = router;