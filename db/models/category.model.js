const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    field: 'created_at',
    type: DataTypes.DATE,
    default: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
};

class Category extends Model {
  static assocciate(models) {
    this.hasMany(models.Product, { as: 'products', foreignKey: 'categoryId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      tableModel: 'Category',
      timestamps: false,
    };
  }
}

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
