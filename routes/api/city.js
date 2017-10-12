const router = require("express").Router();
const cityController = require("../../controllers/cityController");

router.route("/")
  .get(cityController.findAll)
  .post(cityController.createCity);

router.route("/id/:id")
 .get(cityController.findCityById)
 .post(cityController.updateCity);

module.exports = router;
