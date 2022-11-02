const publicationSchema = require("../models/publication");

const createPublication = (req, res) => {
  try{
    const publication = publicationSchema(req.body);
    publication
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ msg: error }));
  }catch(error){
    console.log(error)
  }
  }

  const fetchPublication = (req, res) => {
    try{
      publicationSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ msg: error }));
    }catch(error){
      console.log(error)
    }
  }


 const getOnePublication = (req, res) => {
   try{
     const { id } = req.params;
   publicationSchema
     .findById(id)
     .then((data) => res.json(data))
     .catch((error) => res.json({ msg: error }));
   }catch(error){
     console.log(error)
   }
}


const updatePublication = (req, res) => {
  try{
    const { id } = req.params;
    const {titulo, fecha, publicacion, creador} = req.body;
  publicationSchema
    .updateOne({ _id: id }, {$set: {titulo, fecha, publicacion, creador}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));

  }catch(error){
    console.log(error)
  }
}

const deletePublication = (req, res) => {
  try{
    const { id } = req.params;
  publicationSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({ msg: error }));
  }catch(error){
    console.log(error)
  }
}



  module.exports = {
    createPublication,
    fetchPublication,
    getOnePublication,
    updatePublication,
    deletePublication,
  }