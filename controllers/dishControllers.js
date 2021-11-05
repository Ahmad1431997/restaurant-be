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
