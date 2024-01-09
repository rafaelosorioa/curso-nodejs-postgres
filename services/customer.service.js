const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class CustomerService {
  constructor() {}

  async create(data) {
    data.createdAt = new Date();
    data.user.createdAt = new Date();
    const customer = await models.Customer.create(data, {
      include: ['user'],
    });
    return customer;
  }

  async find() {
    const response = await models.Customer.findAll({
      include: ['user'],
    });

    return response;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);

    if (!customer) throw boom.notFound('Customer Not Found');

    return customer;
  }

  async update(id, changes) {
    const customer = await this.findOne(id);
    const updateCustomer = await customer.update(changes);
    return updateCustomer;
  }

  async delete(id) {
    const customer = await this.findOne(id);
    const deletedCustomer = await customer.destroy();
    return deletedCustomer;
  }
}

module.exports = CustomerService;
