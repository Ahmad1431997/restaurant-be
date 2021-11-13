const express = require("express");
const passport = require("passport");
const { addReservation } = require("../controllers/reservationControllers");
const router = express.Router();
//controllers


router.post(
  "/reservations",
  passport.authenticate("jwt", { session: false }),
  addReservation
);


module.exports = router;