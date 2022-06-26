const connection = require('./connection');

const create = async (task) => {
  const query = 'INSERT INTO tasks (name) VALUES (?);'
  const task = await connection.execute(query, [task]);

  const registeredTask = { task };
  return registeredTask;
};

module.exports = {
  create,
}