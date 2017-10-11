const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.route("/register")
 .post(usersController.register);

router.route("/signin")
 .post(usersController.signIn);

router.route("/test")
 .post(usersController.loginRequired, usersController.test);

module.exports = router;
