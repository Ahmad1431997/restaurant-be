const {Gallary} = require("../db/models");


exports.addImage = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }

    const newImage = await Gallary.create(req.body);

    res.status(201).json(newImage);
  } catch (error) {
    next(error);
  }
};