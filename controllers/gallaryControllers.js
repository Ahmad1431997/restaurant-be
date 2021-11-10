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

exports.imagesList=async (req,res,next)=>{
    try {
      const images= await Gallary.findAll()
      res.json(images)
    } catch (error) {
      next(error)
    }
}

exports.deleteImage=async(req,res,next)=>{
  try {
    
    const foundImage = await Gallary.findByPk(+req.params.imageId)
    
    await foundImage.destroy()
    res.status(204).end()
  } catch (error) {
    next(error)
  }
}



