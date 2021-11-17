const express = require("express");
const passport = require("passport");
const { addReservation, reservationsList } = require("../controllers/reservationControllers");
const router = express.Router();
//controllers


router.post(
  "/reservations",
  passport.authenticate("jwt", { session: false }),
  addReservation
);
router.get("/reservations",passport.authenticate("jwt",{session:false}),reservationsList)

module.exports = router;