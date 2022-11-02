const express = require("express");
const publicationCtrl = require("../controllers/publication.controller");

const router = express.Router();

//create publication
router.post("/publication", publicationCtrl.createPublication);

//get all publications
router.get("/publication", publicationCtrl.fetchPublication);

//get one publication
router.get("/publication/:id", publicationCtrl.getOnePublication);

//update publication
router.put("/publication/:id", publicationCtrl.updatePublication);

//delete publication
router.delete("/publication/:id", publicationCtrl.deletePublication);

  

module.exports = router;
