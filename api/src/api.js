const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config.json');
const path = require('path');
const fs = require('fs');
const { json } = require('express/lib/response');
const basename = path.basename(__filename);
let model_dir = path.dirname(__dirname);
model_dir = path.join(model_dir, 'model')
const db = {};

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

fs
  .readdirSync(model_dir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (path.extname(file) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(model_dir, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db
