const router = require("express").Router();
const placeController = require("../../controllers/placeController");

router.route("/")
  .get(function(req, res){
    res.json("testing 123")
  })
  .post(placeController.addPlace);

router.route("/:id")
//  .get(placeController.findById)
 .post(placeController.updatePlace);

module.exports = router;
