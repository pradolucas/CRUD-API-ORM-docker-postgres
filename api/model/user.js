const { scryptSync, randomBytes } = require('crypto')

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        const salt = randomBytes(16).toString("base64");
        const hashedPwd = scryptSync(value, salt, 64).toString("base64");
        this.setDataValue('senha', `${salt}:${hashedPwd}`);
      }
    },
    ehadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    blocked: {
      type: DataTypes.BOOLEAN,
    },
    banned: {
      type: DataTypes.BOOLEAN,
    }
  },
    {
      tableName: 'usuarios',
      timestamps: false,
      associate: (model) => {
        model.Users.hasMany(model.Trails, { foreignKey: "owner" });
        model.Users.hasMany(model.Comments, { foreignKey: "id_usuario" });
        model.Users.hasMany(model.Favorites, { foreignKey: "id_usuario" });
      }

    }
  )
  return Users
}

