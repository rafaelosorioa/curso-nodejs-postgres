const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
class UserService {
  constructor() {}

  async create(data) {
    data.createdAt = new Date();
    const user = await models.User.create(data);
    return user;
  }

  async find() {
    const response = await models.User.findAll({ include: ['customer'] });

    return response;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);

    if (!user) throw boom.notFound('User Not Found');

    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const updateUser = await user.update(changes);
    return updateUser;
  }

  async delete(id) {
    const user = await this.findOne(id);
    const deletedUser = await user.destroy();
    return deletedUser;
  }
}

module.exports = UserService;
