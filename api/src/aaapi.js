const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'luiztools', { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;
const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'postgres-container',
  database: 'engsoft',
  password: 'example',
  port: 5432
});

const getAllUsers = async (request, response) => {
  pool.query('SELECT * FROM usuarios ORDER BY id ASC', (error, results) => {
    console.log(error ? error.stack : response.status(200).json(results.rows))
  });
};
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
  pool.query('SELECT * FROM usuarios WHERE "id" = $1', [id], (error, results) => {
    console.log(error ? error.stack : response.status(200).json(results.rows))
  });
};
const addUser = async (request, response) => {
  const { id, nome } = request.body;
  pool.query('INSERT INTO usuarios (id, nome) VALUES ($1, $2)', [id, nome], (error, results) => {
    response.status(201).send(`User added successfully.`);
  });
};
const updateUser = (request, response) => {
  const { id, nome } = request.body;
  pool.query('UPDATE usuarios SET nome=$2 WHERE id=$1', [id, nome], (error, results) => {
    response.status(200).send(`User ${id} in usuarios is updated.`);
  });
}
const deleteUser = (request, response) => {
  const { id } = request.body;
  pool.query('DELETE FROM usuarios where id = $1', [id], (error, results) => {
    response.status(200).send(`User ${id} in usuarios is deleted.`);
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};
