module.exports = (sequelize, DataTypes) => {
  const Gallary = sequelize.define("Gallary", {
    image: {
      type: DataTypes.STRING,
    },
  });

  return Gallary;
};