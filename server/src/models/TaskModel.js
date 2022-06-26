const connection = require('./connection');

const create = async (text) => {
  const query = 'INSERT INTO tasks (name) VALUES (?);'
  await connection.execute(query, [text]);

  const registeredTask = { text };
  return registeredTask;
};

const getAll = async () => {
  const query = 'SELECT * FROM tasks';
  const [tasks] = await connection.execute(query);

  return tasks;
}

module.exports = {
  create,
  getAll,
}