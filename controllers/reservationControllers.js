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

exports.reservationsList = async (req, res, next) => {
  try {
    const reservations = await Reservation.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    res.json(reservations);
  } catch (error) {
    next(error);
    // res.status(500).json({msg: error.message ?? "Server Error"})
  }
};