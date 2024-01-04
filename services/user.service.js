// const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class UserService {
  constructor() {
    this.pool = pool;
  }

  async create(data) {
    return data;
  }

  async find() {
    //Create the query sting
    const query = 'SELECT * FROM tasks';
    //Get Pool connection and data
    const response = await this.pool.query(query);

    return response.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
