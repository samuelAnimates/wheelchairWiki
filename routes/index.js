const path = require("path");
const router = require("express").Router();
const authRoutes = require("./auth");
const apiRoutes = require("./api");
const passport = require("../server.js")

// auth Routes
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);

// If no auth routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;