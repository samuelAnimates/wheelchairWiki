const router = require("express").Router();
const cityController = require("../../controllers/cityController");

// TODO: write routes based on the controller functions that are necessary
//TODO: write route with city name as parameter to retrieve info for that city
router.route("/city")
  .get(cityController.findAll)
  .post(cityController.createCity);

router.route("/city/:id")
 .get(cityController.findById)
 .post(cityController.addPlace);

module.exports = router;
