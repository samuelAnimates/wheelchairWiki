const router = require("express").Router();
const cityRoutes = require("./city");
const placeRoutes = require("./place");

// city routes
router.use("/city", cityRoutes);
router.use("/place", placeRoutes);

module.exports = router;