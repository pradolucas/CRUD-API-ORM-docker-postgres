module.exports = (sequelize, DataTypes) => {
  const Favorites = sequelize.define('Favorites', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_trilha: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      tableName: 'favoritos',
      timestamps: false,
      associate: (model) => {
        model.Favorites.belongsTo(model.Trails, { foreignKey: "id_trilha" })
        model.Favorites.belongsTo(model.Users, { foreignKey: "id_usuario" })
      }
    })
  return Favorites
}
