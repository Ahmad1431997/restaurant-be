const express = require("express");
const passport = require("passport");
const { addImage, imagesList, deleteImage } = require("../controllers/gallaryControllers");
const upload = require("../media/middleware/multer");
const router = express.Router();
//controllers

router.post(
  "/images",
//   passport.authenticate("jwt", { session: false }),
 upload.single("image"), addImage
);

router.get("/images",imagesList)

router.delete("/images/:imageId",deleteImage)
module.exports = router;