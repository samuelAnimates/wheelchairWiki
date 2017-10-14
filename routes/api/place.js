const router = require("express").Router();
const placeController = require("../../controllers/placeController");

router.route("/")
//find all places of all types
  .get(placeController.findAll)

router.route("/:type")
  // get all of a particular type
  // to get this by city, use a city route to find a particular city and get the places from its properties
  .get(placeController.findAllOfType)

router.route("/:type/:id")
 .get(placeController.findPlaceById)
 .post(placeController.updatePlace)
 .delete(placeController.deletePlace);

router.route("/:type/:id/link")
 .post(placeController.addPlaceLink)

module.exports = router;
