const connection = require('./connection');

const create = async (text) => {
  const query = 'INSERT INTO tasks (name) VALUES (?);'
  await connection.execute(query, [text]);

  const registeredTask = { text };
  return registeredTask;
};

module.exports = {
  create,
}