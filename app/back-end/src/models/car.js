const CarSchema = (sequelize, DataTypes) => {
  const CarTable = sequelize.define('Car', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    model: DataTypes.STRING,
    brand: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.DECIMAL(10, 2),
    year: DataTypes.INTEGER,
    image: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  }, {
    tableName: 'cars',
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated',
  });

  CarTable.associate = (models) => {
    CarTable.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
  };
  return CarTable;
}

module.exports = CarSchema;