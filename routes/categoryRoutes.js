const express = require("express");
const passport = require("passport");
const { addCategory, categoriesList, deleteCategory, addDish } = require("../controllers/categoryControllers");
const upload = require("../media/middleware/multer");
const router = express.Router();


router.post(
  "/categories",
//   passport.authenticate("jwt", { session: false }),
 addCategory
);

router.get("/categories",categoriesList)

router.delete("/categories/:categoryId",deleteCategory)


//dishes
router.post("/categories/:categoryId/dishes",
// passport.authenticate("jwt",{session:false}),
 upload.single("image") ,addDish);

module.exports = router;