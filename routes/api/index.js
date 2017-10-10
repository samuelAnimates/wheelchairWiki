const router = require("express").Router();
const accinfoController = require("../../controllers/accinfoController");

// TODO: write routes based on the controller functions that are necessary
//TODO: write route with city as parameter to retrieve info for that city
router.route("/info")
  .get(function(req, res){
    res.json("testing 123")
  })
  .post(accinfoController.createInfo);

// router.route("/info")
//  .post();

module.exports = router;
