module.exports = function(sequelize, DataTypes) {
  const Comments = sequelize.define('Comments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    conteudo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_trilha: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
    {
      tableName: 'comentarios',
      timestamps: false,
      associate: (model) => {
        model.Comments.belongsTo(model.Trails, { foreignKey: "id_trilha" });
        model.Comments.belongsTo(model.Users, { foreignKey: "id_usuario" });
      }
    }
  )

  return Comments
}

