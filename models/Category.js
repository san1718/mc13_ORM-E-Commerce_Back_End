// Imports model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const Product = require("./Product");

class Category extends Model {}

// Category table
Category.init(
  // define columns
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // category name
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
