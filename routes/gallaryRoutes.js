const express = require("express");
const passport = require("passport");
const { addImage } = require("../controllers/gallaryControllers");
const upload = require("../media/middleware/multer");
const router = express.Router();
//controllers

router.post(
  "/images",
//   passport.authenticate("jwt", { session: false }),
 upload.single("image"), addImage
);

module.exports = router;