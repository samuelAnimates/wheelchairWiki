const router = require("express").Router();
const placeController = require("../../controllers/placeController");

router.route("/")
//find all places of all types
  .get(placeController.findAll)

router.route("/:type")
  //get all of a particular type
  .get(placeController.findAllOfType)
  .post(placeController.addPlace);

router.route("/:type/:id")
 .get(placeController.findById)
 .post(placeController.updatePlace);

module.exports = router;
