const router = require("express").Router();
const cityController = require("../../controllers/cityController");

router.route("/")
  .get(cityController.findAll)
  .post(cityController.createCity);

router.route("/id/:id")
 .get(cityController.findCityById)
 .post(cityController.updateCity)
 .delete(cityController.deleteCity);

router.route("/id/:cityid/:type")
 .post(cityController.addPlace);

router.route("/:name")
  .get(cityController.findCityByName);

module.exports = router;
