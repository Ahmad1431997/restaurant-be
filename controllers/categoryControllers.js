const { Category, Dish } = require("../db/models");

exports.addCategory = async (req, res, next) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
};


exports.categoriesList = async (req, res, next) => {
  try {
    const list = await Category.findAll({
      attributes : {exclude: ["createdAt","updatedAt"]},

      include: [{
          model: Dish,
          attributes: ["id","name","image","price"],
          as:"dishes"
       } ]

      
    });
    res.json(list);
  } catch (error) {
    next(error);
  }
};


exports.deleteCategory = async (req, res, next) => {
  try {
    const foundCategory = await Category.findByPk(req.params.categoryId);
    foundCategory.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};


exports.addDish = async (req, res, next) => {
  try {

     req.body.categoryId = req.params.categoryId
     if(req.file)
      req.body.image=`http://localhost:8080/media/${req.file.filename}`
      const newDish = await Dish.create(req.body);
      res.status(201).json(newDish)

  } catch (error) {
    next(error);
      // res.status(500).json({msg: error.message ?? "server error"})
  }
};