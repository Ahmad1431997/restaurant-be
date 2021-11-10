const { Dish } = require("../db/models");

exports.dishesList = async (req, res, next) => {
  try {
    const dishes = await Dish.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(dishes);
  } catch (error) {
    next(error);
    // res.status(500).json({msg: error.message ?? "Server Error"})
  }
};

exports.deleteDish= async(req,res,next)=>{
try {
  const foundDish = await Dish.findByPk(req.params.dishId)
  foundDish.destroy()
  res.status(204).end()

} catch (error) {
  next(error)
}
}

exports.updateDish=async(req,res,next)=>{
  console.log(req.body)

  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
      const foundDish= await Dish.findByPk(req.params.dishId)
      if (foundDish) {
         foundDish.update(req.body)

        res.json(foundDish);
      } else {
        next({ message: "dish not Found", status: 404 });
      }
    
    
  } catch (error) {
    next(error)
  }
}