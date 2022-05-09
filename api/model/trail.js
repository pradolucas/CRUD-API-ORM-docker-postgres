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
    likes: {
      type: DataTypes.INTEGER,
    }
  },
    {
      tableName: 'trilhas',
      timestamps: false,
      associate: (model) => {
        model.Trails.hasMany(model.Videos, { foreignKey: "id_trilha" }); //A.hasMany(B, fkey): fkey em B
        model.Trails.hasMany(model.Reports, { foreignKey: "id_trilha" });
        model.Trails.hasMany(model.Comments, { foreignKey: "id_trilha" });
        model.Trails.hasMany(model.Favorites, { foreignKey: "id_trilha" });
        model.Trails.belongsTo(model.Users, { foreignKey: "owner" });  //A.belongsTo(B, fkey): fkey em A
      }
    })

  return Trail
}

