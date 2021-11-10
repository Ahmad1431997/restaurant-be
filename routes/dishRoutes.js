const express = require("express");
const passport = require("passport");
const router = express.Router();
const { dishesList, deleteDish, updateDish } = require("../controllers/dishControllers");
const upload = require("../media/middleware/multer");



router.get("/dishes", dishesList);

router.delete("/dishes/:dishId",deleteDish)

router.put("/dishes/:dishId",upload.single("image"),updateDish)

module.exports = router;