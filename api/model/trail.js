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
    categoria: {
      type: DataTypes.STRING,
    },
    capa: {
      type: DataTypes.STRING,
    },
  },
    {
      tableName: 'trilhas',
      timestamps: false,
      associate: (model) => {
        model.Trails.hasMany(model.Videos, { foreignKey: "id_trilha" });
        model.Trails.hasMany(model.Reports, { foreignKey: "id_trilha" });
        model.Trails.hasMany(model.Comments, { foreignKey: "id_trilha" });
        model.Trails.belongsTo(model.Users, { foreignKey: "id" });
      }
    })

  return Trail
}

