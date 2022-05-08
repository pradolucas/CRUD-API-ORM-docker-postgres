const { Sequelize, DataTypes } = require('sequelize');
const { json } = require('express/lib/response');

const config = require('./config.json');
const path = require('path');
const fs = require('fs');

const basename = path.basename(__filename);
let model_dir = path.dirname(__dirname);
console.log(model_dir)
model_dir = path.join(model_dir, 'model');
const db = {};

// Creating connection with database
const sequelize = new Sequelize('engsoft', 'postgres', 'example', { dialect: 'postgres', host: 'postgres-container' });
async () => {
  try {
    sequelize.sync();
    console.log('Connection has been established successfully.');
  }
  catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Creating objects ORM
fs
  .readdirSync(model_dir)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (path.extname(file) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(model_dir, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Creating asssociation of objetcs
Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName].options) {
    db[modelName].options.associate(db)
    console.log(modelName, Object.keys(db[modelName].associations))
  }
})


db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.Trails.hasMany(db.Videos, { foreignKey: "id_trilha" });
// db.Videos.belongsTo(db.Trails, { foreignKey: "id" })
// console.log(db.Trails.associations)
// console.log(db.Videos.associations)

module.exports = db
