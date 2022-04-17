const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize('engsoft', 'postgres', 'example', { dialect: 'postgres', host: 'postgres-container' });
// const sequelize = new Sequelize(config.database, config.username, config.password, {config});

async () => {
  try {
    sequelize.sync();
    console.log('Connection has been established successfully.');
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

const Users = sequelize.define('user', {
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
    allowNull: false
  },
  ehadmin: {
    type: DataTypes.BOOLEAN,
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
    timestamps: false
  }
)

const Trail = sequelize.define('trail', {
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
    timestamps: false
  }
)

const Video = sequelize.define('video', {
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
    timestamps: false
  }
)

const Comments = sequelize.define('comment', {
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
    timestamps: false
  }
)

const Report = sequelize.define('reports', {
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
    timestamps: false
  }
)

const read = (req, res) => {
  Users.findAll(
  ).then((data) => {
    res.send(data)
  }).catch((error) => {
    console.log(error)
    res.send(error)
  })
}

// .build().save() == .create()
const insert = (req, res) => {
  const dados = req.body
  Users.build(dados)
    .save()
    .then((data) => {
      res.send(true)
    }).catch((error) => {
      console.log(error)
      res.send(false)
    })
}

const update = (req, res) => {
  const dados = req.body
  Users.update(dados, {
    where: {
      id: dados.id
    }
  })
    .then((data) => {
      res.send(true)
    }).catch((error) => {
      console.log(error)
      res.send(false)
    })
}

const del = (req, res) => {
  const dados = req.body
  Users.destroy({
    where: {
      id: dados.id
    }
  })
    .then((rowDeleted) => {
      res.send(true)
    }, (err) => {
      console.log(err)
      res.send(false)
    })
}


module.exports = {
  read
  , insert
  , update
  , del
};
