const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');
const { Category, CategorySchema } = require('./category.model');

//Add our schemas
function setupModels(sequelize) {
  Customer.init(CustomerSchema, Customer.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));

  //Relations
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.assocciate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
