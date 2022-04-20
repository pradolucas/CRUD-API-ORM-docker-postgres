module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Videos', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nome: {
      type: DataTypes.STRING
    },
    id_trilha: {
      type: DataTypes.INTEGER
    }
  },
    {
      tableName: 'videos',
      timestamps: false,
      associate: (model) => {
        model.Videos.belongsTo(model.Trails, { foreignKey: "id_trilha" })
      }
    })
  return Video
}
