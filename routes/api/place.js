const router = require("express").Router();
const placeController = require("../../controllers/placeController");

router.route("/")
//find all places of all types
  .get(placeController.findAll)

router.route("/:type/city/:cityid")
  //get all of a particular type
  .get(placeController.findAllOfType)
  .post(placeController.addPlace);

router.route("/:type/place/:id")
 .get(placeController.findById)
 .post(placeController.updatePlace);

module.exports = router;
