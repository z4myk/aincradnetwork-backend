const eventSchema = require('../models/events')


const createEvents = (req, res) => {
    try{
      const events = eventSchema(req.body);
      events
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ msg: error }));
    }catch(error){
      console.log(error)
    }
    }


    
  const fetchEvents = (req, res) => {
    try{
      eventSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ msg: error }));
    }catch(error){
      console.log(error)
    }
  }


  const deleteEvents = (req, res) => {
    try{
      const { id } = req.params;
    eventSchema
      .deleteOne({_id: id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ msg: error }));
    }catch(error){
      console.log(error)
    }
  }


  module.exports = {
      createEvents,
      fetchEvents,
      deleteEvents,
      
  }