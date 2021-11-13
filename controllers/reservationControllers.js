const { Reservation } = require("../db/models");

exports.addReservation = async (req, res, next) => {
  try {
    req.body.userId = req.user.id
    const newReservation = await Reservation.create(req.body);
    res.status(201).json(newReservation);
  } catch (error) {
    next(error);
  }
};