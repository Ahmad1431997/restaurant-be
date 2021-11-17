module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define("Reservation", {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    groupSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    time: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    type: {
        type: DataTypes.ENUM(['Families', 'Guys']),
        allowNull: false,
    },

    notes: {
      type: DataTypes.STRING,
    },
  });

  Reservation.associate = (models) => {
    models.User.hasMany(Reservation, {
      foreignKey: "userId",
      allowNull: false,
      as:"reservations"
    });

    Reservation.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Reservation;
};
