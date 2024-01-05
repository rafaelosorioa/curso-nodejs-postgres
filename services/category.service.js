const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    data.createdAt = new Date();
    const category = await models.Category.create(data);
    return category;
  }

  async find() {
    const response = await models.Category.findAll();
    return response;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!category) throw boom.notFound('Category not found.');
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const updatedCategory = await category.update(changes);
    return updatedCategory;
  }

  async delete(id) {
    const category = await this.findOne(id);

    return category.destroy();
  }
}

module.exports = CategoryService;
