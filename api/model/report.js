module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('Reports', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    razao: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_trilha: {
      type: DataTypes.INTEGER
    }
  },
    {
      tableName: 'denuncias',
      timestamps: false,
      associate: (model) => {
        model.Reports.belongsTo(model.Trails, { foreignKey: "id_trilha" });
      }
    })

  return Report
}
