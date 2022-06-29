const TaskModel = require('../models/TaskModel');

const create = async (text) => {
  const task = await TaskModel.create(text);

  return task;
}

const getAll = async () => {
  const tasks = await TaskModel.getAll();

  return tasks;
}

const remove = async (id) => {
  const task = await TaskModel.remove(id);

  return task;
}

const update = async (id, text) => {
  const task = await TaskModel.update(id, text);

  return task;
}

module.exports = {
  create,
  getAll,
  remove,
  update,
}