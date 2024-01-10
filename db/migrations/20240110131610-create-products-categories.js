'use strict';

/** @type {import('sequelize-cli').Migration} */
const {
  CategorySchema,
  CATEGORY_TABLE,
} = require('./../models/category.model');
const { ProductModel, PRODUCT_TABLE } = require('./../models/product.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductModel);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
