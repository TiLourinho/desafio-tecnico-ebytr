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

const updateText = async (id, text) => {
  const task = await TaskModel.updateText(id, text);

  return task;
}

const updateType = async (id, type) => {
  const task = await TaskModel.updateType(id, type);

  return task;
}

module.exports = {
  create,
  getAll,
  remove,
  updateText,
  updateType,
}