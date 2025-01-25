// Imports
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Product = require("./Product");
const ProductTag = require("./ProductTag");

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
