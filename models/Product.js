// Imports important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Imports our database connection from config.js
const sequelize = require('../config/connection');
// Imports Category, Tag, and ProductTag models
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  // define columns
  {
    // id
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    // product name
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // price
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    // stock
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    // category id
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
