// Imports
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const Product = require("./Product");
const ProductTag = require("./ProductTag");

class Tag extends Model {}

Tag.init(
  // define columns
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // tag name
    tag_name: {
      type: DataTypes.STRING,
      field: "tag_name",
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true.valueOf,
    modelName: "tag",
  }
);

module.exports = Tag;
