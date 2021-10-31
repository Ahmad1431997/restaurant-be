module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true,
      unique: true,
    },

    phone: { type: DataTypes.STRING, allowNull: false, unique: true },

    username:{type:DataTypes.STRING, unique:true, allowNull:false},
    password: { type: DataTypes.STRING, allowNull: false },

    name: { type: DataTypes.STRING, allowNull: false },
    isAdmin:{type:DataTypes.BOOLEAN, defaultValue:false},
  });

  return User;
};
