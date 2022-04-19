module.exports = (sequelize, DataTypes) => {
  const Trail = sequelize.define('Trails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING
    },
    comentarios: {
      type: DataTypes.STRING,
    },
    categoria: {
      type: DataTypes.STRING,
    },
  },
    {
      tableName: 'trilhas',
      timestamps: false,
      associate: (model) => {
        model.Trails.hasMany(model.Videos, { foreignKey: "id_trilha" });
      }
    })

  return Trail
}

