const { Model, DataTypes, Sequelize } = require('sequelize');

//Give our table a name
const USER_TABLE = 'users';

//Create the schema for our DB
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultVale: Sequelize.NOW,
  },
};

//Create the class that extends the model and pass our table config
class User extends Model {
  static associate() {
    //Define all models relations
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
