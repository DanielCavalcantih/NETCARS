const UserSchema = (sequelize, DataTypes) => {
  const UserTable = sequelize.define('User', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    created: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
    createdAt: 'created',
    updatedAt: 'updated',
  });

  UserTable.associate = (models) => {
    UserTable.hasMany(models.Car, {
      as: 'cars',
      foreignKey: 'user_id',
    });
  };
  return UserTable;
}

module.exports = UserSchema;