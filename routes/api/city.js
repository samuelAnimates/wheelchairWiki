const router = require("express").Router();
const cityController = require("../../controllers/cityController");

// TODO: write routes based on the controller functions that are necessary
//TODO: write route with city name as parameter to retrieve info for that city

router.route("/")
  .get(cityController.findAll)
  .post(cityController.createCity);

router.route("/id/:id")
 .get(cityController.findCityById)
 .post(cityController.updateCity);

module.exports = router;
