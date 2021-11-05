module.exports = (sequelize, DataTypes) => {
  const Dish = sequelize.define("Dish", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://i.ibb.co/D1b8WgJ/dishLogo.png",
    },
  });

  Dish.associate = (models) => {
    models.Category.hasMany(Dish, {
      foreignKey: "categoryId",
      allowNull: false,
      as:"dishes"
    });

    Dish.belongsTo(models.Category, {
      foreignKey: "categoryId",
    });
  };
  return Dish;
};
