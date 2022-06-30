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

const remove = async (id) => {
  const query = 'DELETE FROM tasks WHERE id = ?';
  const [task] = await connection.execute(query, [id]);

  return task;
}

const updateText = async (id, text) => {
  const query = 'UPDATE tasks SET name = ? WHERE id = ?';
  await connection.execute(query, [text, id]);
  
  const registeredTask = { text };
  return registeredTask;
}

const updateType = async (id, type) => {
  const query = 'UPDATE tasks SET type = ? WHERE id = ?';
  await connection.execute(query, [type, id]);

  const registeredType = { type };
  return registeredType;
}

module.exports = {
  create,
  getAll,
  remove,
  updateText,
  updateType,
}