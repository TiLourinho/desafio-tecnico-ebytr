const connection = require('./connection');

const create = async (text) => {
  const query = 'INSERT INTO tasks (name) VALUES (?);'
  const task = await connection.execute(query, [text]);

  const registeredTask = { task };
  return registeredTask;
};

module.exports = {
  create,
}