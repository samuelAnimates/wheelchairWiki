const router = require("express").Router();
const placeController = require("../../controllers/placeController");

router.route("/")
//find all places of all types
  .get(placeController.findAll)

router.route("/:type")
  //get all of a particular type
  // to get this by city, 
  .get(placeController.findAllOfType)

router.route("/:type/place/:id")
 .get(placeController.findById)
 .post(placeController.updatePlace);

module.exports = router;
