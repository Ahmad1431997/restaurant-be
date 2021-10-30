module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
    },

    phone: { type: DataTypes.STRING, allowNull: false, unique: true },

    password: { type: DataTypes.STRING, allowNull: false },

    name: { type: DataTypes.STRING, allowNull: false },
  });

  return User;
};
