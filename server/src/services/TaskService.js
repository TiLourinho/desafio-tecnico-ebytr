const TaskModel = require('../models/TaskModel');

const create = async (text) => {
  const task = await TaskModel.create(text);

  return task;
}

const getAll = async () => {
  const tasks = await TaskModel.getAll();

  return tasks;
}

module.exports = {
  create,
  getAll,
}