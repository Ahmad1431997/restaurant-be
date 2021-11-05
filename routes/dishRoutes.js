const express = require("express");
const passport = require("passport");
const router = express.Router();
const { dishesList } = require("../controllers/dishControllers");



router.get("/dishes", dishesList);

module.exports = router;